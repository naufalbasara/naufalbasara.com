import * as React from 'react';

type SearchBarProps = {
  leftIconClassName?: string;
  rightIconClassName?: string;
  className?: string;
} & React.ComponentPropsWithRef<'div'>;

const Button = React.forwardRef<HTMLDivElement, SearchBarProps>(
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

export default Button;
