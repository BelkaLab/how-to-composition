import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import {
  dialogBodyStyles,
  dialogContentStyles,
  dialogDescriptionStyles,
  dialogFooterStyles,
  dialogHeaderStyles,
  dialogImageStyles,
  dialogOverlayStyles,
  dialogTitleStyles,
} from './styles';
import type {
  DialogBodyElement,
  DialogBodyProps,
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
} from './types';

const Dialog = (props: DialogProps) => <DialogPrimitive.Root {...props} />;
Dialog.displayName = 'Dialog';

const DialogTrigger = forwardRef<DialogTriggerElement, DialogTriggerProps>(
  ({ asChild = true, ...props }, ref) => (
    <DialogPrimitive.Trigger {...props} asChild={asChild} ref={ref} />
  ),
);
DialogTrigger.displayName = 'DialogTrigger';

const DialogPortal = (props: DialogPortalProps) => (
  <DialogPrimitive.Portal {...props} />
);
DialogPortal.displayName = 'DialogPortal';

const DialogOverlay = forwardRef<DialogOverlayElement, DialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
      {...props}
      className={cn(dialogOverlayStyles(), className)}
      ref={ref}
    />
  ),
);
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = forwardRef<DialogContentElement, DialogContentProps>(
  ({ className, container, forceMount, ...props }, ref) => (
    <DialogPortal container={container} forceMount={forceMount}>
      <DialogOverlay />

      <DialogPrimitive.Content
        {...props}
        className={cn(dialogContentStyles(), className)}
        ref={ref}
      />
    </DialogPortal>
  ),
);
DialogContent.displayName = 'DialogContent';

const DialogClose = forwardRef<DialogTriggerElement, DialogTriggerProps>(
  ({ asChild = true, ...props }, ref) => (
    <DialogPrimitive.Close {...props} asChild={asChild} ref={ref} />
  ),
);
DialogClose.displayName = 'DialogClose';

const DialogHeader = forwardRef<DialogHeaderElement, DialogHeaderProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'header';

    return (
      <Component
        {...props}
        className={cn(dialogHeaderStyles(), className)}
        ref={ref}
      />
    );
  },
);
DialogHeader.displayName = 'DialogHeader';

const DialogImage = forwardRef<DialogImageElement, DialogImageProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'img';

    return (
      <Component
        {...props}
        className={cn(dialogImageStyles(), className)}
        ref={ref}
      />
    );
  },
);
DialogImage.displayName = 'DialogImage';

const DialogTitle = forwardRef<DialogTitleElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      {...props}
      className={cn(dialogTitleStyles(), className)}
      ref={ref}
    />
  ),
);
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = forwardRef<
  DialogDescriptionElement,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    {...props}
    className={cn(dialogDescriptionStyles(), className)}
    ref={ref}
  />
));
DialogDescription.displayName = 'DialogDescription';

const DialogBody = forwardRef<DialogBodyElement, DialogBodyProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'div';

    return (
      <Component
        {...props}
        className={cn(dialogBodyStyles(), className)}
        ref={ref}
      />
    );
  },
);
DialogBody.displayName = 'DialogBody';

const DialogFooter = forwardRef<DialogFooterElement, DialogFooterProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'footer';

    return (
      <Component
        {...props}
        className={cn(dialogFooterStyles(), className)}
        ref={ref}
      />
    );
  },
);
DialogFooter.displayName = 'DialogFooter';

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogImage,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
