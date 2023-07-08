import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import NextImage from '@/components/NextImage';
import Card from '@/components/Card';

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

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <main>
        <section className='bg-[#171717] text-white'>
          <div className='layout min-h-screen text-center sm:grid sm:grid-cols-3'>
            <Header/>
            <main className='mx-auto flex-col items-center sm:mt-32 mt-24 sm:col-span-2'>
              <section className='flex'>
                <NextImage
                  useSkeleton
                  src='/images/profile-picture.png'
                  width='160'
                  height='160'
                  alt='naufalbasara.png'
                />
                <Card className='text-left'>
                  <h1 className='text-3xl'>Naufal Rafiawan Basara</h1>
                  <p className='text-sm text-[#A0A0A0]'>Tech savvy, AI/ML enthusiast</p>
                </Card>
              </section>
              <section className='text-left mt-8'>
                <p>As a final-year Information Systems student with hard-working, highly dedicated traits and solid knowledge in programming, I dedicated to leverage my skills in machine learning field. Proficient in fulfilling the role of a teaching assistant with a focus on programming, I actively contribute by sharing my current expertise and facilitating learning opportunities.</p><br/>
                <p>I have a deep passion and keen interest in exploring machine learning field by joining various related competitions, working on OCR capstone project, etc. to broaden my skills to build innovative and impactful business solution with the help of Machine Learning that solve real-world problems. I particularly interested in exploring opportunities to work with Tensorflow environment.</p>
                <div className='mt-6 text-[45px]'>
                  <i className="devicon-python-plain mr-4"></i>
                  <i className="devicon-tensorflow-original mr-4"></i>
                  <i className="devicon-django-plain mr-4"></i>
                  <i className="devicon-microsoftsqlserver-plain-wordmark mr-4"></i>
                  <i className="devicon-nextjs-original"></i>
                </div>
              </section>
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}
