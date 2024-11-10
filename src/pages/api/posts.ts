import { NextApiRequest, NextApiResponse } from 'next';
import prismaClient from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method == 'GET') {
      const postMeta = await prismaClient.post.findMany({
        select: {
          slug: true,
          _count: {
            select: {
              visits: true
            }
          }
        },
        orderBy: {
          datePosted: 'desc'
        }
      });

      return res.status(200).json({
        postObject: (postMeta)
      });
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