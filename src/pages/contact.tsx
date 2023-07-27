import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import UnstyledLink from '@/components/links/UnstyledLink';
import ArrowLink from '@/components/links/ArrowLink';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets:['latin'],
  weight:['400', '700'],
})
export default function Contact() {
  return (
    <Layout>
      <Seo templateTitle='Contact' />
      <section className={poppins.className + ' block items-start text-left'}>
        <h1 className='mb-6 text-left text-lg sm:text-3xl'>
          👋 Hey, Contact me for anything!
        </h1>
        <p className='my-10 text-[#A0A0A0]'>
          I particularly interested in exploring opportunities to work with
          Tensorflow environment. I'm open for discussions of projects,
          partnership, or hiring 🤝
        </p>

        <section className='my-4 flex items-center text-3xl'>
          <UnstyledLink href='https://github.com/naufalbasara' className='mr-6 hover:text-[#A0A0A0] active:text-[#2A412A] '>
            <i className='devicon-github-original'></i>
          </UnstyledLink>
          <UnstyledLink
            href='https://linkedin.com/in/naufalrafiawan'
            className='mr-6 hover:text-[#A0A0A0] active:text-[#2A412A]'
          >
            <i className='devicon-linkedin-plain'></i>
          </UnstyledLink>
          <UnstyledLink
            href='https://twitter.com/naufalbasara'
            className='mr-6 hover:text-[#A0A0A0] active:text-[#2A412A]'
          >
            <i className='devicon-twitter-original'></i>
          </UnstyledLink>
        </section>

        <section>
          <ArrowLink
            href='https://drive.google.com/file/d/17kdErcSKv9vtUJn2LUWa5YpLloSeiwdQ/view?usp=sharing'
            as={UnstyledLink}
            className='mr-4 inline-flex items-center hover:text-[#A0A0A0]'
          >
            my resume
          </ArrowLink>
          <ArrowLink
            href='mailto:naufalbasara@outlook.com?cc=naufalbasara9@gmail.com'
            as={UnstyledLink}
            className='inline-flex items-center hover:text-[#A0A0A0]'
          >
            send me emails
          </ArrowLink>
        </section>
      </section>
    </Layout>
  );
}
