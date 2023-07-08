import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import NextImage from '@/components/NextImage';
import Card from '@/components/Card';
import UnstyledLink from '@/components/links/UnstyledLink';
import { Octokit } from "@octokit/core";

export default function HomePage() {
  const [data, setData] = React.useState({name:'',total_repo:null});
  React.useEffect(() => {
    const octokit = new Octokit({
      auth: `${process.env.NEXT_PUBLIC_API_KEY}`
    })
    octokit.request(
      "https://api.github.com/users/naufalbasara", 
      {
        headers: {
          authorization: `token ${process.env.NEXT_PUBLIC_API_KEY}`
        }
      }
    ).then((response) => {
      const data = {name:'', total_repo:null}
      data.name = response.data['login'];
      data.total_repo = response.data['total_private_repos'] + response.data['public_repos'];
      setData(data);
    })
});

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section className='bg-[#171717] text-white'>
          <div className='layout h-full sm:min-h-screen text-center sm:grid sm:grid-cols-3'>
            <Header/>
            <main className='mx-auto flex-col items-center sm:mt-32 mt-24 sm:col-span-2'>
              <section className='flex items-center'>
                <NextImage
                  useSkeleton
                  src='/images/profile-picture.png'
                  width='160'
                  height='160'
                  alt='naufalbasara.png'
                />
                <Card className='text-left sm:h-20 h-full p-2'>
                  <h1 className='sm:text-3xl text-lg mb-2'>Naufal Rafiawan Basara</h1>
                  <p className='sm:text-sm text-xs text-[#A0A0A0]'>Tech savvy, AI/ML enthusiast</p>
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
                <div className='my-8'>
                  <Card className='flex items-center justify-between text-left p-4 w-56 h-20'>
                    <div>
                    <p>@{data.name}</p>
                    <p className='text-xs text-[#A0A0A0]'>{data.total_repo} total repositories</p>
                    </div>
                    
                    <UnstyledLink href='https://github.com/naufalbasara'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" className='text-white' viewBox="0 -960 960 960" width="32"><path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294L202-160Z"/></svg>
                    </UnstyledLink>
                  </Card>
                </div>
              </section>
            </main>
          </div>
        </section>
      </main>
    </Layout>
  );
}