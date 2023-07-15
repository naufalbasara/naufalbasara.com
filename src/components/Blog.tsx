import * as React from 'react';
import Link from 'next/link';
type BlogProps = {
  className?: string;
  title?: string;
  dateUpload?: string;
  href?: string;
  // url?: string;
} & React.ComponentPropsWithRef<'div'>;

const Blog = React.forwardRef<HTMLDivElement, BlogProps>(
  (
    {
      className,
      title,
      dateUpload,
      href,
      // url,
    },
  ) => {
    return (
      <Link href={`${href}`} className={'block p-2 text-left ' + className}>   
          <h1 className='text-lg'>{title}</h1>
          <p className='text-xs text-[#A0A0A0]  '>{dateUpload}</p>
      </Link>
    );
  }
);

export default Blog;
