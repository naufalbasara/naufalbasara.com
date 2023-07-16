import * as React from 'react';
import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <>
  <section className='bg-[#171717] text-white h-screen'>
          <div className='layout h-full text-center sm:grid sm:grid-cols-3'>
            <Header/>
            <main className='w-full mx-auto flex-col items-center sm:mt-32 mt-24 sm:col-span-2'>
              {children}
            </main>
          </div>
  </section>
  </>;
}
