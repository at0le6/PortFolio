import { color } from '@constants/colors';
import { IColor } from '@interfaces/utils';

interface GetColor {
  ColorLigth: IColor;
  ColorDark?: IColor;
}

export const getColor = ({ ColorLigth, ColorDark }: GetColor, isDark: boolean): IColor => {
  if (!ColorDark && isDark) return __DefaulChanges(ColorLigth);
  if (isDark) return ColorDark;
  return ColorLigth;
};
const __DefaulChanges = (Color: IColor): IColor => {
  console.log(Color);
  switch (Color) {
    case 'accent':
      return 'white';
    case 'black':
      return 'white';
    case 'blue_dark':
      return 'gray';
    case 'blue_ligth':
      return 'gray';
    case 'blue_background':
      return 'white';
    case 'white':
      return 'blue_ligth';
    case 'gray':
      return 'extraAccent';
    default:
      return 'white';
  }
};
