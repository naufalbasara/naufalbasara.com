import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-[#111111] text-white'>
          <div className='layout relative min-h-screen py-12 text-center grid grid-cols-6'>
            <Header/>
            <div className='col-span-4 mx-auto my-auto'>
              <h1 className='mt-4'>
                Naufal Rafiawan Basara
              </h1>
              <p className='mt-2 text-sm text-gray-800'>
                A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
                Import, Seo, Link component, pre-configured with Husky{' '}
              </p>
              <p className='mt-2 text-sm text-gray-700'>
                <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                  See the repository
                </ArrowLink>
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
