import { globalStyle } from '@vanilla-extract/css';

import { vars } from '../themes/theme.css';

globalStyle('html, body', {
  boxSizing: 'border-box',
  margin: 0,
});

globalStyle('body', {
  backgroundColor: vars.background,
  color: vars.color,
  fontFamily: 'sans-serif',
  padding: '1rem;',
});
