/** @type {import('next').NextConfig} */
// next.config.js
 
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

const nextConfig = {
  webpack5:true,
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
  swcMinify: true,
      
      // SVGR
      webpack: (config) => {
        config.resolve.fallback = { fs: false };
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                typescript: true,
                icon: true,
              },
            },
          ],
        });
        
        return config;
      },
    };
    
    // Merge MDX config with Next.js config
    module.exports = withMDX(nextConfig)
    