import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'solid' | 'outline';

type ButtonElement = ElementRef<'button'>;
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export type { ButtonElement, ButtonProps };
