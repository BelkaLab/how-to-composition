import { cva } from 'cva';

const buttonStyles = cva({
  base: 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50 [&>svg]:w-[1em] [&>svg]:min-w-[1em]',
  variants: {
    size: {
      sm: 'h-8 min-w-8 px-2.5 py-1.5 text-sm',
      md: 'h-10 min-w-10 px-3 py-2 text-base',
      lg: 'h-12 min-w-12 px-3.5 py-2.5 text-lg',
    },
    variant: {
      solid:
        'bg-black text-white hover:bg-purple-800 hover:text-white active:bg-purple-900 active:text-white disabled:bg-black disabled:text-white',
      outline:
        'border border-black bg-transparent text-black hover:border-purple-800 hover:bg-purple-50 hover:text-purple-800 active:border-purple-900 active:bg-purple-100 active:text-purple-900 disabled:border-black disabled:bg-transparent disabled:text-black',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'solid',
  },
});

export { buttonStyles };
