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
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let topics = frontMatter.topics.split(",");
  const [scrolled, setScrolled] = useState(0);

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
            <span className='text-sm text-[#A0A0A0]'>Posted on {frontMatter.dateUpload}{frontMatter.projectURL && (<span> - <a className='text-[#A0A0A0] hover:text-[#4FB464]' target='_blank' href={frontMatter.projectURL}>Source Code<svg xmlns="http://www.w3.org/2000/svg" className='inline' height="12px" viewBox="0 -960 960 960" width="12px" fill="#A0A0A0"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg></a></span>)}</span>
            <div className='my-2 text-xs flex overflow-auto'>
              {topics.map((topic:string) => (
                <span key={topic} className='p-2 bg-[#2A412F] mr-4 rounded-xl align-middle'>{topic}</span>
              ))}
            </div>
            <hr className='mt-4'/>
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

export const getStaticProps = async ({ params }: Params) => {
  const rootDir = path.join(process.cwd(), 'src', 'blogContents');
  const postFilePath = path.join(rootDir, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath, { encoding: 'utf-8' });
  const { content, data } = matter(source);

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
      frontMatter: data,
    },
  };
};

export default SinglePage;
