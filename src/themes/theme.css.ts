import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

const emptyTheme = {
  colors: {
    background: '#000000',
    color: '#000000',
    primary100: '#000000',
    primary200: '#000000',
    secondary100: '#000000',
    secondary200: '#000000',
  },
};

export const vars = createThemeContract(emptyTheme);

export const theme = createGlobalTheme(':root', vars, {
  colors: {
    background: 'rgb(250, 240, 245)',
    color: 'rgb(22, 22, 22)',
    primary100: 'rgb(100, 70, 240)',
    primary200: 'rgb(60, 70, 230)',
    secondary100: 'rgb(240, 70, 100)',
    secondary200: 'rgb(230, 70, 60)',
  },
});
