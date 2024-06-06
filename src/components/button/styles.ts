import { cva } from 'cva';

const buttonStyles = cva({
  base: 'inline-flex items-center justify-center gap-2 rounded-full bg-black font-bold text-white transition-colors hover:bg-purple-800 active:bg-purple-900 [&>svg]:h-[1em] [&>svg]:w-[1em]',
  variants: {
    size: {
      sm: 'h-8 min-w-8 px-2.5 py-1.5 text-sm',
      md: 'h-10 min-w-10 px-3 py-2 text-base',
      lg: 'h-12 min-w-12 px-3.5 py-2.5 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export { buttonStyles };
