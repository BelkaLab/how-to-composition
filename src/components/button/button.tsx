import { createContext } from '@radix-ui/react-context';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { Badge } from '@/components/badge';
import { cn } from '@/lib/cn';

import { buttonStyles } from './styles';
import {
  ButtonBadgeElement,
  ButtonBadgeProps,
  type ButtonElement,
  type ButtonProps,
} from './types';

const [ButtonProvider, useButtonContext] =
  createContext<Pick<ButtonProps, 'size'>>('Button');

const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      asChild,
      children,
      className,
      size = 'md',
      type = 'button',
      variant = 'solid',
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';

    return (
      <ButtonProvider size={size}>
        <Component
          {...props}
          className={cn(buttonStyles({ size, variant }), className)}
          ref={ref}
          type={type}
        >
          {children}
        </Component>
      </ButtonProvider>
    );
  },
);
Button.displayName = 'Button';

const ButtonBadge = forwardRef<ButtonBadgeElement, ButtonBadgeProps>(
  ({ size: sizeProp, ...props }, ref) => {
    const { size: sizeContext } = useButtonContext('ButtonBadge');
    const size = sizeProp ?? sizeContext;

    return <Badge {...props} size={size} ref={ref} />;
  },
);
ButtonBadge.displayName = 'ButtonBadge';

export { Button, ButtonBadge };
