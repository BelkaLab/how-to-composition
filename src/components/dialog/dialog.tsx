import * as DialogPrimitive from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { cn } from '@/lib/cn';

import { Slot } from '@radix-ui/react-slot';
import type {
  DialogContentElement,
  DialogContentProps,
  DialogDescriptionElement,
  DialogDescriptionProps,
  DialogFooterElement,
  DialogFooterProps,
  DialogHeaderElement,
  DialogHeaderProps,
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
      className={cn('fixed inset-0 z-50 bg-black opacity-50', className)}
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
        className={cn(
          'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-stone-100',
          className,
        )}
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
        className={cn('flex flex-col gap-2 rounded-t-[inherit] p-4', className)}
        ref={ref}
      />
    );
  },
);
DialogHeader.displayName = 'DialogHeader';

const DialogTitle = forwardRef<DialogTitleElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      {...props}
      className={cn('text-lg font-bold text-zinc-900', className)}
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
    className={cn('mb-1 text-base text-zinc-900', className)}
    ref={ref}
  />
));
DialogDescription.displayName = 'DialogDescription';

const DialogFooter = forwardRef<DialogFooterElement, DialogFooterProps>(
  ({ asChild, className, ...props }, ref) => {
    const Component = asChild ? Slot : 'footer';

    return (
      <Component
        {...props}
        className={cn(
          'flex flex-row justify-end gap-4 rounded-b-[inherit] p-4',
          className,
        )}
        ref={ref}
      />
    );
  },
);
DialogFooter.displayName = 'DialogFooter';

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
