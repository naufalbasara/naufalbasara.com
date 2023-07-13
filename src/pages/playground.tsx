import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import SearchBar from '@/components/SearchBar';
import Blog from '@/components/Blog';

const dataBlog = [
  {'title': 'Cats vs Dogs Classifier', 'dateUpload': '8 June 2023'},
  {'title': 'Sentiment Analysis with IndoBERT', 'dateUpload': '12 July 2023'},
]

export default function Playground() {
  return (
    <Layout>
      <Seo templateTitle='Playground' />
      <main>
        <section className='bg-[#171717] text-white'>
          <div className='layout min-h-screen text-center sm:grid sm:grid-cols-3'>
            <Header/>
            <main className='mx-auto w-full flex-col items-center sm:mt-32 mt-24 sm:col-span-2'>
              <SearchBar className='mb-6'/>
              {dataBlog.map(({title, dateUpload}) => (
                <Blog key={title} title={title} dateUpload={dateUpload} className='mb-4'/>
              ))}
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}
