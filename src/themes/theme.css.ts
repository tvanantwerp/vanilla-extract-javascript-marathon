import { createTheme, createThemeContract } from '@vanilla-extract/css';

const emptyTheme = {
  black: '#000000',
  darkGray: '#000000',
  lightGray: '#000000',
  white: '#000000',
  primary: '#000000',
};

export const vars = createThemeContract(emptyTheme);

export const theme = createTheme(vars, {
  black: '#151515',
  darkGray: '#rgb(91, 90, 87)',
  lightGray: 'rgb(247, 245, 239)',
  white: '#ffffff',
  primary: '#rgb(198, 251, 108)',
});

export const darkModeTheme = createTheme(vars, {
  white: '#151515',
  lightGray: '#rgb(91, 90, 87)',
  darkGray: 'rgb(247, 245, 239)',
  black: '#ffffff',
  primary: '#rgb(198, 251, 108)',
});
