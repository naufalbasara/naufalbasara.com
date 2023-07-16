import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SearchBar from '@/components/SearchBar';
import Blog from '@/components/Blog';
import { getAllPostsMeta } from '@/lib/mdx';
import { InferGetStaticPropsType } from 'next';

export default function Playground({posts}:InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Seo templateTitle='Playground' />
      <SearchBar className='mb-6'/>
              {posts?.map((frontMatter:any) => (
                <Blog key={frontMatter?.slug} href={`/playground/${frontMatter?.slug}`} title={frontMatter?.title} dateUpload={frontMatter?.dateUpload} className='mb-4'/>
              ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsMeta();
  
  return {props: {posts}}

}