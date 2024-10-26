import axios from 'axios';
import { getAllPostsMeta } from '@/lib/mdx';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const poppins = Inter({
  subsets:['latin'],
  weight:['100', '300', '400', '500', '700'],
})

const SinglePage = ({
  source,
  frontMatter
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let topics = frontMatter.topics.split(",");
  const [scrolled, setScrolled] = useState(0);
  const [liked, setLiked] = useState(false);
  const [meta, setMeta] = useState({visits: 0, likes: 0});

  const handleLike = async () => {
    try {
      await axios.post(`/api/like/${frontMatter.slug}`).then((res)=> {
        setMeta({visits: meta.visits, likes: res.data.contentLikes});
      })
    } catch (error) {
      console.info('user already liked this post!');
    }
  };

  useEffect(() => {
    (async () => {
      await axios.get(`/api/like/${frontMatter.slug}`).then(res => 
        {
          setLiked(res.data.isLiked);
        }
      )
    })()
  }, [meta]);

  useEffect(() => {
    (async () => {
      await axios.get(`/api/content/${frontMatter.slug}`).then((res) => {
        setMeta({visits: res.data.contentViews, likes:res.data.contentLikes})
      })
    })()
  }, [SinglePage, frontMatter]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Layout>
        <Seo templateTitle={`${frontMatter.title}`} />
        <main className={poppins.className + ' text-left prose prose-invert'}>
        <Link href='/posts' className='hover:text-[#787878] duration-200 text-[#A0A0A0] no-underline rounded-xl text-xs sm:text-sm lg:text-base mb-2'>
            <svg
            viewBox='0 0 16 16'
            height='1em'
            width='1em'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={
              'inline duration-200 rotate-180'
            }
          >
            <path
              fill='currentColor'
              d='M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z'
            />
            <path
              stroke='currentColor'
              d='M1.75 8H11'
              strokeWidth='1.5'
              strokeLinecap='round'
              className={'origin-left transition-all duration-200 opacity-0'}
            />
          </svg>
          <span>back to posts</span>
        </Link>
          <div className='mt-4'>
            <h1>{frontMatter.title}</h1>
            <span className='text-sm text-[#A0A0A0]'>Posted on {frontMatter.dateUpload} –— <span className='text-[#4FB464]'>{meta.visits ? meta.visits : '–'} views</span></span>
            <p className='text-sm text-[#A0A0A0]'>{frontMatter.projectURL && (<a className='text-[#A0A0A0] hover:text-[#4FB464]' target='_blank' href={frontMatter.projectURL}>Source Code<svg xmlns="http://www.w3.org/2000/svg" className='inline' height="12px" viewBox="0 -960 960 960" width="12px" fill="#A0A0A0"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></a>)}</p>
            <div className='my-2 flex justify-between items-center'>
              <div className='text-xs flex overflow-auto'>
                {topics.map((topic:string) => (
                  <span key={topic} className='p-2 bg-[#2A412F] mr-4 rounded-xl align-middle'>{topic}</span>
                ))}
              </div>
              <div className='flex flex-col items-center justify-center'>
              <button 
                disabled={liked}
                onClick={() => {
                  handleLike();
                }} 
                className={liked ? 'w-10 h-10 transition duration-200 rounded-full p-2 flex justify-center items-center bg-[#2A412F]' : 'w-10 h-10 transition duration-200 rounded-full border border-1 border-[#2A412F] p-2 flex justify-center items-center hover:bg-[#2A412F]'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={liked ? "#4FB464" : '#FFFFFF'}><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>
              </button>
              <span className='text-xs'>{meta.likes ?  meta.likes : '-'} likes</span>
              </div>
            </div>
            <hr className='mt-2'/>
            <MDXRemote {...source} />
          </div>
        </main>
        <button onClick={()=> {scrollTo(0,0)}} className={scrolled < 500 ? 'fixed transition duration-200 rounded-full bg-opacity-40 p-2 translate-y-12 bottom-0 right-4' : 'fixed transition duration-200 ease-in rounded-full p-2 bg-[#2A412F] bottom-4 right-4'}>
        <svg xmlns="http://www.w3.org/2000/svg" className={scrolled >= 500 ? 'animate-bounce' : ''} height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z"/></svg>
        </button>
        {source && (
          <footer className='p-10 text-sm text-[#A0A0A0]'>
            <p>© {currentYear} - naufalbasara</p>
          </footer>
        )}
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getAllPostsMeta();

  return {
    paths: posts.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

type Params = {
  params: {
    slug: string;
  };
};

export const dynamic = 'auto'

export const getStaticProps = async ({ params }: Params) => {
  const rootDir = path.join(process.cwd(), 'src', 'blogContents');
  const postFilePath = path.join(rootDir, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, { encoding: 'utf-8' });
  const { content, data } = matter(source);
  
  // update views data
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  axios.post(`${baseUrl}/api/content/${params.slug}`).then(res => res.data)
  data.slug = params.slug;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    },
  };
};

export default SinglePage;
