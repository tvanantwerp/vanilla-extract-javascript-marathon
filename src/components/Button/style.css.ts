import { style, styleVariants } from '@vanilla-extract/css';

import { sprinkles } from '../../sprinkles/sprinkles.css';
import { vars } from '../../themes/theme.css';

const baseButtonStyle = style([
  sprinkles({
    borderRadius: { mobile: 'small', desktop: 'large' },
    padding: { mobile: 'medium', desktop: 'xxlarge' },
  }),
  {
    color: 'white',
    cursor: 'pointer',
    border: 'none',
    fontSize: '24px',
    transition: 'background-color 0.2s ease-in-out',
  },
]);

export const buttonStyle = styleVariants({
  purple: [
    baseButtonStyle,
    {
      backgroundColor: vars.colors.primary100,
      ':hover': {
        backgroundColor: vars.colors.primary200,
      },
    },
  ],
  red: [
    baseButtonStyle,
    {
      backgroundColor: vars.colors.secondary100,
      ':hover': {
        backgroundColor: vars.colors.secondary200,
      },
    },
  ],
});
