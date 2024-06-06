import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import { badgeStyles } from './styles';
import type { BadgeElement, BadgeProps } from './types';

const Badge = forwardRef<BadgeElement, BadgeProps>(
  ({ asChild, className, size = 'md', ...props }, ref) => {
    const Component = asChild ? Slot : 'span';

    return (
      <Component
        {...props}
        className={cn(badgeStyles({ size }), className)}
        ref={ref}
      />
    );
  },
);
Badge.displayName = 'Badge';

export { Badge };
