export const color = {
  black: '#283334',
  white: '#FCFCFC',
  blue_dark: '#003049',
  blue_ligth: '#004a6e',
  accent: '#F77F00',
  extraAccent: '#FCBF49',
  gray: '#fcfcfcc5',
  blue_superDark: '#001E2D'
} as const;

export type color = (typeof color)[keyof typeof color];
