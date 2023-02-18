export const spaces = {
  small: '2rem',
  medium: '4rem',
  big: '8rem',
  huge: '16rem'
} as const;

export type spaces = (typeof spaces)[keyof typeof spaces];
