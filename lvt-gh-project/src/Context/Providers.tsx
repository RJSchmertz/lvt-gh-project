import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { IconContext } from 'react-icons';
import { darkTheme } from '../Theme/theme';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <IconContext.Provider
      value={{ style: { verticalAlign: 'middle', padding: '0.2em' } }}
    >
      <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
    </IconContext.Provider>
  );
}

export default Providers;
