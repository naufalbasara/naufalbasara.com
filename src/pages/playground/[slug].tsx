import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from 'next';

const SinglePage = ({content}:InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(content)
  return (
    <>
      <Layout>
        <Seo templateTitle={``} />
        {content}
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPostsMeta();

  return {
    paths: posts.map((post:any) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ( {params} ) => {
  const {content} = await getPostBySlug(params?.slug as string)
  return {props: JSON.parse(JSON.stringify(content))}

}

export default SinglePage;