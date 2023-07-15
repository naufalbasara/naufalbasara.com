import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import PostLayout from '@/components/layout/PostLayout';
// import MDPage from '@/blogContents/mdx-page.mdx';

// const dataBlog = [
//   {'title': 'Cats vs Dogs Classifier', 'dateUpload': '8 June 2023'},
//   {'title': 'Sentiment Analysis with IndoBERT', 'dateUpload': '12 July 2023'},
// ]

export default function Check() {
  return (
    <Layout>
      <Seo templateTitle='Check' />
      <main>
        <PostLayout>
          {/* <MDPage/> */}
        </PostLayout>
      </main>
    </Layout>
  );
}
