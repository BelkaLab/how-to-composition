import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonElement = ElementRef<'button'>;
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  size?: ButtonSize;
};

export type { ButtonElement, ButtonProps };
