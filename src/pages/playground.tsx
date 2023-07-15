import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SearchBar from '@/components/SearchBar';
import Blog from '@/components/Blog';
import { getAllPostsMeta } from '@/lib/mdx';

export default function Playground(meta: object) {
  const allPosts = [meta];

  return (
    <Layout>
      <Seo templateTitle='Playground' />
        <main>
            <SearchBar className='mb-6'/>
              {allPosts?.map((frontMatter:any) => (
                <Blog key={frontMatter?.title} href={`playground/${frontMatter?.slug}`} title={frontMatter?.title} dateUpload={frontMatter?.dateUpload} className='mb-4'/>
              ))}
        </main>
    </Layout>
  );
}

export async function getProps() {
  const posts = await getAllPostsMeta()
  return {props: {posts}}
}