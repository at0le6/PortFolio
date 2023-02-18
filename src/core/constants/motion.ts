export const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { backgroundColor: 'white', filter: `invert()`, opacity: 0, x: 0, y: -100 }
} as const;
export type variants = (typeof variants)[keyof typeof variants];
