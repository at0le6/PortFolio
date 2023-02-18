import { Dispatch, SetStateAction } from 'react';

export type Theme = 'ligth' | 'dark' | string;

export type ChangeThemeContextType = {
  toggleDark: () => void;
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
};
