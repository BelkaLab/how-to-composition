import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ComponentPropsWithoutRef, ElementRef } from 'react';

type DialogProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Root>;

type DialogTriggerElement = ElementRef<typeof DialogPrimitive.Trigger>;
type DialogTriggerProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
>;

type DialogPortalProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Portal
>;

type DialogOverlayElement = ElementRef<typeof DialogPrimitive.Overlay>;
type DialogOverlayProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

type DialogContentElement = ElementRef<typeof DialogPrimitive.Content>;
type DialogContentProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> &
  DialogPortalProps;

type DialogCloseElement = ElementRef<typeof DialogPrimitive.Close>;
type DialogCloseProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Close>;

type DialogHeaderElement = ElementRef<'header'>;
type DialogHeaderProps = ComponentPropsWithoutRef<'header'> & {
  asChild?: boolean;
};

type DialogImageElement = ElementRef<'img'>;
type DialogImageProps = ComponentPropsWithoutRef<'img'> & {
  asChild?: boolean;
};

type DialogTitleElement = ElementRef<typeof DialogPrimitive.Title>;
type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;

type DialogDescriptionElement = ElementRef<typeof DialogPrimitive.Description>;
type DialogDescriptionProps = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

type DialogBodyElement = ElementRef<'div'>;
type DialogBodyProps = ComponentPropsWithoutRef<'div'> & {
  asChild?: boolean;
};

type DialogFooterElement = ElementRef<'footer'>;
type DialogFooterProps = ComponentPropsWithoutRef<'footer'> & {
  asChild?: boolean;
};

export type {
  DialogBodyElement,
  DialogBodyProps,
  DialogCloseElement,
  DialogCloseProps,
  DialogContentElement,
  DialogContentProps,
  DialogDescriptionElement,
  DialogDescriptionProps,
  DialogFooterElement,
  DialogFooterProps,
  DialogHeaderElement,
  DialogHeaderProps,
  DialogImageElement,
  DialogImageProps,
  DialogOverlayElement,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleElement,
  DialogTitleProps,
  DialogTriggerElement,
  DialogTriggerProps,
};
