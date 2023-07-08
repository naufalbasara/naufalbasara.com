import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';

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

export default function About() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
        <section className='bg-[#171717] text-white'>
          <div className='layout min-h-screen text-center sm:grid sm:grid-cols-3'>
            <Header/>
            <main className='mx-auto flex-col items-center sm:mt-32 mt-24 sm:col-span-2'>
              <h1 className='text-[#A0A0A0]'>Development on progress..</h1>
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}
