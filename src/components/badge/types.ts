import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type BadgeElement = ElementRef<'span'>;
type BadgeProps = ComponentPropsWithoutRef<'span'> & {
  asChild?: boolean;
};

export type { BadgeElement, BadgeProps };
