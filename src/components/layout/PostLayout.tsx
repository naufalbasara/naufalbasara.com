import * as React from 'react';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>
    <article className='text-left'>
    {children}
    </article>
  </>;
}
