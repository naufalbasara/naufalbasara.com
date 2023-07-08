import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import SearchBar from '@/components/SearchBar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

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
              <p>empty..</p>
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}
