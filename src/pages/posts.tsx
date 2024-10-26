import * as React from 'react';

import Layout from '@/components/layout/Layout';
import prismaClient from '@/lib/prisma';
import Seo from '@/components/Seo';
import SearchBar from '@/components/SearchBar';
import Blog from '@/components/Blog';
import { getAllPostsMeta } from '@/lib/mdx';
import { InferGetStaticPropsType } from 'next';

export default function Posts({
  postsClean
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isLoading, setLoading] = React.useState(false);

  let sortedPosts = postsClean.sort((a: any, b: any) => {
    const date1 = new Date(a.dateUpload)
    const date2 = new Date(b.dateUpload)
    if (date1 < date2) {
      return 1;
    } else if (date1 > date2) {
      return -1;
    }
    return 0;
  });

  React.useEffect(() => {
    if (!postsClean) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Posts' />
      <SearchBar className='mb-6' />
      {isLoading ? (
        <div className='text-center'>
          <p className='sm:text-md text-base text-white md:text-xl'>
            please wait...{' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='inline animate-spin text-white'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
            >
              <path d='M480-80q-84 0-157-31t-127-85q-54-54-85-127T80-480q0-84 31-157t85-127q54-54 127-85t157-31q12 0 21 9t9 21q0 12-9 21t-21 9q-141 0-240.5 99.5T140-480q0 141 99.5 240.5T480-140q141 0 240.5-99.5T820-480q0-12 9-21t21-9q12 0 21 9t9 21q0 84-31 157t-85 127q-54 54-127 85T480-80Z' />
            </svg>
          </p>
        </div>
      ) : (
        sortedPosts.map((frontMatter: any) => (
          <>
          <Blog
            key={frontMatter?.slug}
            href={`/posts/${frontMatter?.slug}`}
            title={frontMatter?.title}
            dateUpload={frontMatter?.dateUpload}
            views={frontMatter._count.visits}
            className='mb-4 hover:text-[#A0A0A0]'
          />
          </>
        ))
      )
    }
    </Layout>
  );
}

export async function getStaticProps() {
  const posts:postsInterface[] = await getAllPostsMeta();
  const postMeta:dbInterface[] | null = await prismaClient.post.findMany({
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
  
  const map2 = new Map<string, dbInterface>(postMeta.map(item => [item.slug, item]));
  const postsClean = posts.map((item: postsInterface) => ({
    ...item,
    ...(map2.get(item.slug) || {}) // Merge with matching object from array2 if exists
  }));

  return { props: { postsClean, postMeta: JSON.parse(JSON.stringify(postMeta))  } };
}

interface postsInterface {
  dateUpload: string;
  projectURL: string;
  slug: string;
  title: string;
  topics: string;
}

interface dbInterface {
  slug: string;
  _count: object;
}