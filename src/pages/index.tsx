import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Header from '@/components/layout/Header';
import Seo from '@/components/Seo';
import NextImage from '@/components/NextImage';
import Card from '@/components/Card';
import UnstyledLink from '@/components/links/UnstyledLink';

export default function HomePage() {
  const [data, setData] = React.useState({username:null, total_repos:null});
  const dataFetchedRef = React.useRef(false);


  React.useEffect(() => {
    if (dataFetchedRef.current) return; 
    dataFetchedRef.current = true;
    try {
      fetch('api/handler').then((response) => {
        response.json().then((response) => {
          const github_data = {
            'username': response.name,
            'total_repos': response.total_repos
          }
          setData(github_data);
        })
      });
    } catch {
      console.log('failed to fetch')
    }
    
}, []);

  return (
    <Layout>
      <Seo templateTitle='Home' />
        <main>
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
                    {
                      data.username &&
                      <Card className='flex items-center justify-between text-left p-4 w-56 h-20'>
                      <div>
                        <p>@{data.username}</p>
                        <p className='text-xs text-[#A0A0A0]'>{data.total_repos} total repositories</p>
                      </div>
                      
                      <UnstyledLink href='https://github.com/naufalbasara'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h279v60H180v600h600v-279h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60v-218L382-339Z"/></svg>
                      </UnstyledLink>
                      </Card>
                    }
                    </div>
                  </section>
        </main>
    </Layout>
  );
}