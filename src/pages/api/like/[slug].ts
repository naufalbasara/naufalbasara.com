import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import prismaClient from '@/lib/prisma';
import { serialize } from 'cookie';
import { z } from 'zod';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const today = new Date();
  const slug =  z.string().parse(req.query.slug);
  const cookieStore = req.headers.cookie || ''
  const cookieAnalytics = cookieStore.includes('analytics-basara') ? cookieStore.split('analytics-basara=')[1].split(';')[0] : null;
  let sessionId = cookieAnalytics;
  
  function generateSecureRandomString(length: number) {
    return crypto.randomBytes(length).toString('hex'); // Generate a hex string
  }

  // If the cookie is not found, generate a secure random string and set the cookie
  if (!cookieAnalytics) {
    const newCookieValue:string = generateSecureRandomString(16);  // 16 bytes -> 32 characters hex

    // Using the 'serialize' function from the 'cookie' library to set the cookie
    const cookie = serialize('analytics-basara', newCookieValue, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'strict',
      expires: new Date(today.getFullYear(), today.getMonth()+1, today.getDate())
    });

    // Set the cookie header using Node.js' res.setHeader
    res.setHeader('Set-Cookie', cookie);
    sessionId = newCookieValue;
  } else {
    sessionId = cookieAnalytics;
  }
  
  try {
    if (req.method == 'POST') {
      const user = await prismaClient.post.findFirst({
        select: {
          slug: true
        },
        where: {
          slug: slug,
          likes: {
            some: {sessionId: sessionId}
          }
        }
      })
      if (user?.slug != undefined) {
        return res.status(403).json({
          isLiked: true,
          message: 'user already liked this post!'
        })
      }

      const content = await prismaClient.post.upsert({
        where: {
          slug: slug
        },
        create: {
          slug,
          likes: {
            create: {
              sessionId
            },
          },
        },
        update: {
          likes: {
            create: {
              sessionId,
            },
          },
        },
        include: {
          _count: {
            select: {
              likes: true,
            },
          },
        },
      })
      
      return res.status(201).json({
        contentLikes: (content?._count.likes ?? 0)
      });
    } else if (req.method == 'GET') {
      const user = await prismaClient.post.findFirst({
        select: {
          slug: true
        },
        where: {
          slug: slug,
          likes: {
            some: {sessionId: sessionId}
          }
        }
      })
      if (user?.slug == undefined) {
        return res.status(200).json({
          isLiked: false
        })
      } else {
        return res.status(200).json({
          isLiked: true
        })
      }
    }

  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ 
        message: error.message ?? 'Internal Server Error' 
      })
    } else {
      res.status(500).json({ 
        message: 'Internal Server Error' 
      })
    }
  }
}