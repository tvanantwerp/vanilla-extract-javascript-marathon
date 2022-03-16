import { createTheme, createThemeContract } from '@vanilla-extract/css';

const emptyTheme = {
  background: '#000000',
  color: '#000000',
  primary100: '#000000',
  primary200: '#000000',
  secondary100: '#000000',
  secondary200: '#000000',
};

export const vars = createThemeContract(emptyTheme);

export const lightTheme = createTheme(vars, {
  background: 'rgb(250, 240, 245)',
  color: 'rgb(22, 22, 22)',
  primary100: 'rgb(100, 70, 240)',
  primary200: 'rgb(60, 70, 230)',
  secondary100: 'rgb(240, 70, 100)',
  secondary200: 'rgb(230, 70, 60)',
});

export const darkTheme = createTheme(vars, {
  background: 'rgb(22, 22, 22)',
  color: 'rgb(250, 240, 245)',
  primary100: 'rgb(240, 70, 100)',
  primary200: 'rgb(230, 70, 60)',
  secondary100: 'rgb(100, 70, 240)',
  secondary200: 'rgb(60, 70, 230)',
});
