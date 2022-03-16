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
    sprinkles({
      backgroundColor: {
        lightMode: 'primary100',
        darkMode: 'secondary100',
      },
      color: 'background',
    }),
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
