import * as LabelPrimitive from '@radix-ui/react-label';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import { labelStyles } from './styles';
import type { LabelElement, LabelProps } from './types';

const Label = forwardRef<LabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      {...props}
      className={cn(labelStyles(), className)}
      ref={ref}
    />
  ),
);
Label.displayName = 'Label';

export { Label };
