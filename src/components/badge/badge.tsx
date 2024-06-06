import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import type { BadgeElement, BadgeProps } from './types';

const Badge = forwardRef<BadgeElement, BadgeProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'span';

    return (
      <Component
        {...props}
        className={cn(
          'inline-flex h-6 min-w-6 items-center justify-center gap-1 rounded-full bg-white px-2 py-0.5 text-sm font-semibold text-black transition-colors',
          className,
        )}
        ref={ref}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge };
