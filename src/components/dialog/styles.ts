import { cva } from 'cva';

const dialogOverlayStyles = cva({
  base: 'fixed inset-0 z-50 bg-black opacity-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
});

const dialogContentStyles = cva({
  base: 'fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-stone-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-1/2',
});

const dialogHeaderStyles = cva({
  base: 'flex flex-col gap-2 rounded-t-[inherit] p-4',
});

const dialogImageStyles = cva({
  base: 'max-h-64 w-full max-w-full rounded-lg object-cover',
});

const dialogTitleStyles = cva({
  base: 'text-lg font-bold text-zinc-900',
});

const dialogDescriptionStyles = cva({
  base: 'text-base text-zinc-900',
});

const dialogBodyStyles = cva({
  base: 'flex flex-col gap-2 p-4',
});

const dialogFooterStyles = cva({
  base: 'flex justify-end gap-2 rounded-b-[inherit] p-4',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

export {
  dialogBodyStyles,
  dialogContentStyles,
  dialogDescriptionStyles,
  dialogFooterStyles,
  dialogHeaderStyles,
  dialogImageStyles,
  dialogOverlayStyles,
  dialogTitleStyles,
};
