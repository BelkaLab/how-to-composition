import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import { buttonStyles } from './styles';
import type { ButtonElement, ButtonProps } from './types';

const Button = forwardRef<ButtonElement, ButtonProps>(
  ({ asChild, className, size = 'md', type = 'button', ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        {...props}
        className={cn(buttonStyles({ size }), className)}
        type={type}
        ref={ref}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
