import { DefaultTheme } from 'styled-components';
import { color } from '@constants/colors';
import { size } from '@constants/size';
import { spaces } from '@constants/spaces';
import { MAX_WIDTH_LAYOUT } from '@constants/device';

export const LigthTheme: DefaultTheme = {
  palette: {
    black: color.black,
    white: color.white,
    gray: color.gray,
    accent: color.accent,
    extraAccent: color.extraAccent,
    yellow: color.extraAccent,
    blue_dark: color.blue_dark,
    blue_ligth: color.blue_ligth,
    blue_SuperDark: color.blue_superDark
  },
  layout: {
    maxWidth: MAX_WIDTH_LAYOUT
  },
  space: {
    small: spaces.small,
    medium: spaces.medium,
    big: spaces.big,
    huge: spaces.huge
  },
  size: {
    small: size.small,
    medium: size.medium,
    big: size.big,
    extraBig: size.extraBig,
    huge: size.huge
  },
  mode: {
    current: 'ligth',
    main: color.white,
    contrastText: color.blue_dark
  }
};
