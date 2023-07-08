import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import {useRouter} from 'next/router';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/playground', label: 'Playground' },
];

export default function Header() {
  const router = useRouter()

  return (
    <header className='static sm:sm-left-0 sm:z-50 sm:mt-32 mt-24 mx-auto'>
      <div className='sm:flex sm:flex-col sm:justify-between sm:text-end'>
        <UnstyledLink href='/' className='font-bold text-3xl hover:text-[#4FB464] sm:mb-16'>
          {'<basara/>'}
        </UnstyledLink>
        <nav>
          <ul className='flex sm:flex-col justify-between text-end'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='sm:mb-16 text-xl'>
                <UnstyledLink href={href} className={router.pathname===href?'text-[#4FB464]':'text-white' + ' hover:text-[#4FB464]'}>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
