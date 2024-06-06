import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type ButtonElement = ElementRef<'button'>;

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
};

export type { ButtonElement, ButtonProps };
