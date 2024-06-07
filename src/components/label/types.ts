import * as LabelPrimitive from '@radix-ui/react-label';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

type LabelElement = ElementRef<typeof LabelPrimitive.Root>;
type LabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root>;

export type { LabelElement, LabelProps };
