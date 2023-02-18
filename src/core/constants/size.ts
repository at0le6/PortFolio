export const size = {
  small: '1.5rem',
  medium: '4rem',
  big: '1.9rem',
  extraBig: '3.5rem',
  semiHuge: '5rem',
  huge: '8rem',
  extraHuge: '16rem'
} as const;

export type size = (typeof size)[keyof typeof size];
