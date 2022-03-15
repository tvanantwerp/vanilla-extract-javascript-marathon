import { style } from '@vanilla-extract/css';

import { vars } from '../../themes/theme.css';

export const card = style({
  backgroundColor: vars.white,
  border: `1px solid ${vars.black}`,
  color: vars.black,
  padding: '16px',
});
