import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function GuestBook() {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <Layout>
      <Seo />
      <h1>Coming soon..</h1>
    </Layout>
  );
}
