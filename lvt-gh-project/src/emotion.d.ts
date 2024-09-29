import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: {
        primary: string;
        secondary: string;
      };
      background: {
        primary: string;
        secondary: string;
      };
      error: string;
      warning: string;
      success: string;
    };
    typography: {
      fontFamily: string;
      fontSize: {
        sm: string;
        md: string;
        lg: string;
      };
      fontWeight: {
        regular: number;
        medium: number;
        bold: number;
      };
    };
  }
}
