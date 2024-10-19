import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Card from '@/components/Card';

export default function HomePage() {
  const [isLoading, setLoading] = React.useState(false);
  const [gitData, setGitData] = React.useState({
    username: null,
    total_repos: null,
    avatar_url: null,
  });

  // React.useEffect(() => {
  //   const init = async () => {
  //     const { Tooltip, initTE } = await import("tw-elements");
  //     initTE({ Tooltip });
  //   };
  //   init();
  // }, []);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await fetch('api/handler').then((response) => {
          response.json().then((response) => {
            const github_data = {
              username: response.name,
              total_repos: response.total_repos,
              avatar_url: response.avatar_url,
            };
            setGitData(github_data);
            setLoading(false);
          });
        });
      } catch {
        console.log('failed to fetch');
      }
    })();
  }, []);

  return (
    <Layout>
      <Seo />
      <section className='flex items-center'>
        <img
          alt=''
          className='mx-auto block h-28 w-28 shrink-0 rounded-full bg-white object-cover'
          src='/images/profile-picture.JPG'
        />
        <div 
        data-te-animation-init
        data-te-animation-start="onHover"
        data-te-animation-reset="true"
        data-te-animation="[slide-right_1s_ease-in-out]"
        className='container h-full rounded-2xl bg-[#2A412F] p-2 text-left sm:h-20'>
          <h1 className='mb-2 text-lg sm:text-3xl'>Naufal Rafiawan Basara</h1>
          <p className='text-xs text-[#A0A0A0] sm:text-sm'>
            Tech savvy, AI/ML enthusiast
          </p>
        </div>
      </section>
      <section className=' mt-8 text-left'>
        <p>
        Talks in Python. Interested to build AI-powered software and end-to-end data solutions for companies to become data-driven.
        </p>
        <div className='mt-6 text-[45px]'>
          <i className='devicon-python-plain mr-4'></i>
          <i className='devicon-tensorflow-original mr-4'></i>
          <i className='devicon-django-plain mr-4'></i>
          <i className='devicon-microsoftsqlserver-plain-wordmark mr-4'></i>
          <i className='devicon-nextjs-original'></i>
        </div>
        <div className={isLoading ? 'my-8 animate-pulse ' : ' my-8'}>
          <Card
            href='https://github.com/naufalbasara'
            className={ isLoading ? 'blur-sm flex h-24 w-60 items-center justify-between p-4 text-left transition hover:scale-105 hover:bg-opacity-70 hover:drop-shadow-md hover:backdrop-blur-md' :
              ' flex h-24 w-60 items-center justify-between p-4 text-left transition hover:scale-105 hover:bg-opacity-70 hover:drop-shadow-md hover:backdrop-blur-md'
            }
          >
            <img
              src={
                isLoading ? '/images/profile-picture.png' : gitData.avatar_url!
              }
              className={isLoading ? 'blur-sm h-12 w-12': 'h-12 w-12'}
              alt=''
            />
            <div
              className={isLoading ? 'flex-1 animate-pulse space-y-3 py-1' : ''}
            >
              <p className={isLoading ? 'h-2 rounded bg-slate-400' : ''}>
                {!isLoading && gitData.username}
              </p>
              <p
                className={
                  isLoading
                    ? 'h-2 rounded bg-slate-400 '
                    : 'text-xs text-[#A0A0A0]'
                }
              >
                {!isLoading && gitData.total_repos + ' total repositories'}
              </p>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24'
              viewBox='0 -960 960 960'
              width='24'
              fill='#FFFFFF'
            >
              <path d='M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z' />
            </svg>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
