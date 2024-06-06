import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type BadgeSize = 'sm' | 'md' | 'lg';

type BadgeElement = ElementRef<'span'>;
type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  asChild?: boolean;
  size?: BadgeSize;
};

export type { BadgeElement, BadgeProps };
