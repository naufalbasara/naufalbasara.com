import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import UnstyledLink from '@/components/links/UnstyledLink';
import ArrowLink from '@/components/links/ArrowLink';
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
            <main className='w-full mx-auto items-center sm:mt-32 mt-24 sm:col-span-2'>
              <section className='block items-start text-left'>
                <h1 className='sm:text-3xl text-lg text-left mb-6'>👋 Hey, Contact me for anything!</h1>
                <p className='text-[#A0A0A0] my-10'>I particularly interested in exploring opportunities to work with Tensorflow environment. I'm open for discussions of projects, partnership, or hiring 🤝</p>
          
                <section className='flex items-center text-3xl my-4'>
                  <UnstyledLink href='https://github.com/naufalbasara' className='me-4'>
                    <i className="devicon-github-original"></i>
                  </UnstyledLink>
                  <UnstyledLink href='https://linkedin.com/in/naufalrafiawan' className='me-4'>
                    <i className="devicon-linkedin-plain"></i>
                  </UnstyledLink>
                  <UnstyledLink href='https://twitter.com/naufalbasara' className='me-4'>
                    <i className="devicon-twitter-original"></i>
                  </UnstyledLink>
                </section>

                <section>
                  <ArrowLink href='mailto:naufalbasara@outlook.com?cc=naufalbasara9@gmail.com' as={UnstyledLink}
                    className='inline-flex items-center'>
                    send me emails
                  </ArrowLink>
                </section>
              </section>
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}
