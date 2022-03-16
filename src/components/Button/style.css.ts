import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../themes/theme.css';

const baseButtonStyle = style({
  color: 'white',
  cursor: 'pointer',
  borderRadius: '4px',
  border: 'none',
  fontSize: '24px',
  padding: '18px;',
  transition: 'background-color 0.2s ease-in-out',
});

export const buttonStyle = styleVariants({
  purple: [
    baseButtonStyle,
    {
      backgroundColor: vars.primary100,
      ':hover': {
        backgroundColor: vars.primary200,
      },
    },
  ],
  red: [
    baseButtonStyle,
    {
      backgroundColor: vars.secondary100,
      ':hover': {
        backgroundColor: vars.secondary200,
      },
    },
  ],
});
