import { Slot } from '@radix-ui/react-slot';
import { createContext, forwardRef, useContext } from 'react';

import { Badge } from '@/components/badge';
import { cn } from '@/lib/cn';

import { buttonStyles } from './styles';
import {
  ButtonBadgeElement,
  ButtonBadgeProps,
  type ButtonElement,
  type ButtonProps,
} from './types';

const ButtonContext = createContext<Pick<ButtonProps, 'size'>>({});
const useButtonContext = () => useContext(ButtonContext);

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
      <ButtonContext.Provider value={{ size }}>
        <Component
          {...props}
          className={cn(buttonStyles({ size, variant }), className)}
          type={type}
          ref={ref}
        >
          {children}
        </Component>
      </ButtonContext.Provider>
    );
  },
);
Button.displayName = 'Button';

const ButtonBadge = forwardRef<ButtonBadgeElement, ButtonBadgeProps>(
  (props, ref) => {
    const button = useButtonContext();

    return <Badge size={button.size} {...props} ref={ref} />;
  },
);
ButtonBadge.displayName = 'ButtonBadge';

export { Button, ButtonBadge };
