import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Discussion from '@/components/Discussion';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets:['latin'],
  weight:['400', '700'],
})

export default function GuestBook() {
  return (
    <Layout>
      <Seo />
      <section className={poppins.className + ' block items-start text-left'}>
        <h1 className='mb-6 text-left text-lg sm:text-3xl'>
        Sign my guestbook
        </h1>
        <p className='text-xs text-[#A0A0A0]'>Leave an online footprint here - any suggestions or appreciations are welcomed</p>
      </section>
      <section className='pt-6 pb-20'>
        <Discussion/>
      </section>
    </Layout>
  );
}
