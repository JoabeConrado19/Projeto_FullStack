declare module '@mui/material/styles' {
  interface Theme {
    pallette: {
      third: PaletteOptions['primary'];
      fourth: PaletteOptions['primary'];
    }
  }

  interface Palette {
    third: Palette['primary'];
    fourth: Palette['primary'];
  }

  interface PaletteOptions {
    third?: PaletteOptions['primary'];
    fourth?: PaletteOptions['primary'];
  }

  interface ThemeOptions {
  }
}

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4529e6',
    },
    secondary: {
      main: '#5126ea'
    },
    third: {
      main: '#b0a6f0'
    },
    fourth: {
      main: '#edeafd'
    }
  },
});

export default theme