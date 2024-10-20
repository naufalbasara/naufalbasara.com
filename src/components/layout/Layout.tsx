import * as React from 'react';
import Header from '@/components/layout/Header';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
  <section className={poppins.className + ' bg-[#171717] text-white min-h-screen'}>
          <div className='layout h-full text-center sm:grid sm:grid-cols-3'>
            <Header/>
            <main className='w-full mx-auto sm:mt-32 mt-24 sm:col-span-2'>
              {children}
            </main>
          </div>
  </section>
  </>;
}
