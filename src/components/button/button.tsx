import { createContext } from '@radix-ui/react-context';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { Badge } from '@/components/badge';
import { cn } from '@/lib/cn';

import { buttonStyles } from './styles';
import type {
  ButtonBadgeElement,
  ButtonBadgeProps,
  ButtonContextValue,
  ButtonElement,
  ButtonProps,
} from './types';

const [ButtonContext, useButtonContext] =
  createContext<ButtonContextValue>('Button');

const Button = forwardRef<ButtonElement, ButtonProps>(
  ({ asChild, className, size = 'md', type = 'button', ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <ButtonContext size={size}>
        <Component
          {...props}
          className={cn(buttonStyles({ size }), className)}
          type={type}
          ref={ref}
        />
      </ButtonContext>
    );
  },
);
Button.displayName = 'Button';

const ButtonBadge = forwardRef<ButtonBadgeElement, ButtonBadgeProps>(
  (props, ref) => {
    const button = useButtonContext('ButtonBadge');

    return <Badge size={button.size} {...props} ref={ref} />;
  },
);
ButtonBadge.displayName = 'ButtonBadge';

export { Button, ButtonBadge };
