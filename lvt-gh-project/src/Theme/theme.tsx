import { Theme } from '@emotion/react';

export const darkTheme: Theme = {
  colors: {
    primary: '#0079FF',
    secondary: '#6c757d',
    accent: '#28a745',
    text: {
      primary: '#FFFFFF',
      secondary: '#495057',
    },
    background: {
      primary: '#141D2F',
      secondary: '#1E2A47',
    },
    error: '#dc3545',
    warning: '#ffc107',
    success: '#28a745',
  },
  typography: {
    fontFamily: 'monospace, Arial, sans-serif',
    fontSize: {
      sm: '0.8rem',
      md: '1rem',
      lg: '1.2rem',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
};
