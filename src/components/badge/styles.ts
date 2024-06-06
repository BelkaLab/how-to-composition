import { cva } from 'cva';

const badgeStyles = cva({
  base: 'inline-flex h-6 min-w-6 items-center justify-center gap-1 rounded-full bg-white px-2 py-0.5 text-sm font-semibold text-black transition-colors',
});

export { badgeStyles };
