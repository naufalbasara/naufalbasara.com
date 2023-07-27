import UnstyledLink from '@/components/links/UnstyledLink';
import * as React from 'react';

type CardProps = {
  leftIconClassName?: string;
  rightIconClassName?: string;
  className?: string;
  href?: string;
} & React.ComponentPropsWithRef<'div'>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      href
    },
  ) => {
    return (
      <UnstyledLink href={href!} className={'bg-[#2A412F] rounded-2xl container ' + className}>
        {children}
      </UnstyledLink>
        
    );
  }
);

export default Card;
