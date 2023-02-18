import 'styled-components';
interface IPalette {
  current: 'dark' | 'ligth';
  main: string;
  contrastText: string;
}
interface ISpace {
  small: string;
  medium: string;
  big: string;
  huge: string;
}

interface ISize {
  small: string;
  medium: string;
  big: string;
  extraBig: string;
  huge: string;
}
interface layout {
  maxWidth: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      black: string;
      white: string;
      gray: string;
      accent: string;
      extraAccent: string;
      yellow: string;
      blue_dark: string;
      blue_ligth: string;
      blue_SuperDark: string;
    };
    layout: layout;
    space: ISpace;
    mode: IPalette;
    size: ISize;
  }
}
