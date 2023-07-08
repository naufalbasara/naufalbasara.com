import * as React from 'react';

type CardProps = {
  leftIconClassName?: string;
  rightIconClassName?: string;
  className?: string;
} & React.ComponentPropsWithRef<'div'>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      ...rest
    },
  ) => {
    return (
      <div className={'bg-[#2A412F] rounded-2xl container ' + className}>
        {children}
      </div>
        
    );
  }
);

export default Card;
