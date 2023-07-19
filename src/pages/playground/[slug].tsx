import { getAllPostsMeta } from '@/lib/mdx';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets:['latin'],
  weight:['100', '200', '300', '400', '500', '600', '700'],
})

const SinglePage = ({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Layout>
        <Seo templateTitle={`${frontMatter.title}`} />
        <main className={poppins.className + ' text-left prose dark:prose-invert'}>
          <h1>{frontMatter.title}</h1>
          <span className='text-xs text-[#A0A0A0]'>{frontMatter.dateUpload} by {frontMatter.author}</span>
          <MDXRemote {...source} />
        </main>
        {source && (
          <footer className='p-10 text-sm'>
            <p>© 2023 - rb</p>
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
