import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import type { ButtonElement, ButtonProps } from './types';

const Button = forwardRef<ButtonElement, ButtonProps>(
  ({ asChild, className, type = 'button', ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        {...props}
        className={cn(
          'inline-flex h-10 min-w-10 items-center justify-center gap-2 rounded-full bg-black px-3 py-2 text-base font-bold text-white transition-colors hover:bg-purple-800',
          className,
        )}
        type={type}
        ref={ref}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
