import { getPostBySlug } from "@/lib/mdx";
import Layout from "@/components/layout/Layout";

const getPageContent = async (slug:any) => {
  const {meta, content} = await getPostBySlug(slug)
  return {meta, content};
}

export async function generateMetadata({params}:any) {
  const {meta} = await getPageContent(params.slug);
  return {title: meta.slug}
}

const Page = async ({params}:any) => {
  const {content} = await getPageContent(params.slug)

  return (
    <>
      <Layout>
        {content}
      </Layout>
    </>
  )
}