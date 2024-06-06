import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type InputSize = 'sm' | 'md' | 'lg';

type InputElement = ElementRef<'input'>;
type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  asChild?: boolean;
  size?: InputSize;
};

export type { InputElement, InputProps };
