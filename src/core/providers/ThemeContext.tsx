import React, { FC, createContext, useEffect, useState } from 'react';
import type { ChangeThemeContextType, Theme } from '@interfaces/providers/ThemeContext';
import { Return_ChildrenReactNode } from '@interfaces/utils';
import { ThemeProvider as ConfigTheme } from 'styled-components';
import { DarkTheme, LigthTheme } from '@styles/themes';
import CookieCutter from 'cookie-cutter';

export const ThemeContext = createContext<ChangeThemeContextType | null>(null);

export const ThemeProvider: FC<Return_ChildrenReactNode> = ({
  children
}: Return_ChildrenReactNode) => {
  const [theme, setTheme] = useState<Theme>('ligth');
  const toggleDark = () => {
    const getTheme = theme == 'ligth' ? 'dark' : 'ligth';
    setTheme(getTheme);
    CookieCutter.set('theme', getTheme, { path: '/' });
  };
  return (
    <ConfigTheme theme={theme == 'ligth' ? LigthTheme : DarkTheme}>
      <ThemeContext.Provider value={{ theme, toggleDark, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </ConfigTheme>
  );
};
