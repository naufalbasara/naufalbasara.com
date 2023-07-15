import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import UnstyledLink from '@/components/links/UnstyledLink';
import ArrowLink from '@/components/links/ArrowLink';

export default function About() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
      <section className='block items-start text-left'>
                <h1 className='sm:text-3xl text-lg text-left mb-6'>👋 Hey, Contact me for anything!</h1>
                <p className='text-[#A0A0A0] my-10'>I particularly interested in exploring opportunities to work with Tensorflow environment. I'm open for discussions of projects, partnership, or hiring 🤝</p>
          
                <section className='flex items-center text-3xl my-4'>
                  <UnstyledLink href='https://github.com/naufalbasara' className='mr-6'>
                    <i className="devicon-github-original"></i>
                  </UnstyledLink>
                  <UnstyledLink href='https://linkedin.com/in/naufalrafiawan' className='mr-6'>
                    <i className="devicon-linkedin-plain"></i>
                  </UnstyledLink>
                  <UnstyledLink href='https://twitter.com/naufalbasara' className='mr-6'>
                    <i className="devicon-twitter-original"></i>
                  </UnstyledLink>
                </section>

                <section>
                  <ArrowLink href='https://drive.google.com/file/d/1EZhgH6BOlb-3Af1H1ug0TPTjo8qkPXC0/view?usp=sharing' as={UnstyledLink}
                    className='inline-flex items-center mr-4'>
                    my resume
                  </ArrowLink>
                  <ArrowLink href='mailto:naufalbasara@outlook.com?cc=naufalbasara9@gmail.com' as={UnstyledLink}
                    className='inline-flex items-center'>
                    send me emails
                  </ArrowLink>
                </section>
              </section>
      </main>
    </Layout>
  );
}
