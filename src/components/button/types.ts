import type { ComponentPropsWithoutRef, ElementRef } from 'react';

import { Badge } from '@/components/badge';

type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonElement = ElementRef<'button'>;
type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  size?: ButtonSize;
};
type ButtonContextValue = Pick<ButtonProps, 'size'>;

type ButtonBadgeElement = ElementRef<typeof Badge>;
type ButtonBadgeProps = ComponentPropsWithoutRef<typeof Badge>;

export type {
  ButtonBadgeElement,
  ButtonBadgeProps,
  ButtonContextValue,
  ButtonElement,
  ButtonProps,
};
