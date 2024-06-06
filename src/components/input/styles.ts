import { cva } from 'cva';

const inputStyles = cva({
  base: 'flex border-x-0 border-b border-t-0 border-black bg-transparent px-0 transition-colors focus-visible:border-black focus-visible:outline-0 focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    size: {
      sm: 'h-8 py-1.5 text-sm',
      md: 'h-10 py-2 text-base',
      lg: 'h-12 py-2.5 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export { inputStyles };
