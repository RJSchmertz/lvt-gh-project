import React, { Context } from 'react';
import { darkTheme } from '../Theme/theme';
import { Theme } from '@emotion/react';

export interface AppContextValues {
  user: string;
  setUser: (user: string) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const AppContext: Context<AppContextValues> =
  React.createContext<AppContextValues>({
    user: '',
    setUser: (user: string) => user,
    theme: darkTheme,
    setTheme: (theme: Theme) => theme,
  });
