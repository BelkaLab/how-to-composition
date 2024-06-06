import { cva } from 'cva';

const badgeStyles = cva({
  base: 'inline-flex items-center justify-center gap-1 rounded-full bg-white font-semibold text-black transition-colors',
  variants: {
    size: {
      sm: 'h-5 min-w-5 px-1 py-0.5 text-xs',
      md: 'h-6 min-w-6 px-1.5 py-0.5 text-sm',
      lg: 'h-7 min-w-7 px-2 py-1 text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export { badgeStyles };
