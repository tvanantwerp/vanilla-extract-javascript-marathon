import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  boxSizing: 'border-box',
  margin: 0,
});

globalStyle('body', {
  backgroundColor: 'rgb(247, 245, 239)',
  color: 'rgb(22, 22, 22)',
  fontFamily: 'sans-serif',
  padding: '1rem',
});
