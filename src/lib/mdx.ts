import fs from 'fs'
import path from 'path'
import {compileMDX} from 'next-mdx-remote/rsc';

const rootDir = path.join(process.cwd(), 'src', 'blogContents')

export const getPostBySlug = async (slug:string) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDir, `${realSlug}.mdx`)

  const fileContent = fs.readFileSync(filePath, {encoding:'utf-8'})

  const {frontmatter, content} = await compileMDX({
    source: fileContent,
    options: {parseFrontmatter: true}
  }) 

  return {meta : {slug: realSlug, ...frontmatter}, content}

}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDir)

  const posts: any = [];
  for (const file of files) {
    const {meta} = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts;
}