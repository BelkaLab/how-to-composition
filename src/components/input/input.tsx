import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import { inputStyles } from './styles';
import type { InputElement, InputProps } from './types';

const Input = forwardRef<InputElement, InputProps>(
  ({ asChild, className, size = 'md', ...props }, ref) => {
    const Component = asChild ? Slot : 'input';

    return (
      <Component
        {...props}
        className={cn(inputStyles({ size }), className)}
        ref={ref}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
