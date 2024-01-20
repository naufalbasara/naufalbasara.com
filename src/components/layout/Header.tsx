import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import {useRouter} from 'next/router';

const links = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
  { href: '/posts', label: 'Posts' },
];

export default function Header() {
  const router = useRouter()

  return (
    <header className='static sm:sm-left-0 sm:z-50 sm:mt-32 mx-auto'>
      <div className='sm:flex sm:flex-col sm:justify-between sm:text-end'>
        <UnstyledLink href='/' className='font-bold text-3xl hidden sm:block transition-all ease-in-out duration-600 hover:text-[#4FB464] sm:mb-16'>
          {'<basara/>'}
        </UnstyledLink>
        <nav>
          <ul className='flex sm:flex-col justify-between text-end pt-2 sm:pt-0'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className='sm:mb-16 text-xl p-2'>
                <UnstyledLink href={href} className={router.pathname===href?'text-[#4FB464] motion-safe:animate-pulse':'' + ' transition-all ease-in-out text-white duration-600 hover:text-[#4FB464]'}>
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <li className='text-xs text-[#A0A0A0] sm:block hidden mb-4'>© 2023 - rb</li>
            <li className='text text-[#A0A0A0] sm:block hidden'>
                <UnstyledLink href={'/guestbook'} >
                  guestbook
                </UnstyledLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
