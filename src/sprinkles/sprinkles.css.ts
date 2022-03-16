import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from '../themes/theme.css';

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: {
      '@media': '(prefers-color-scheme: dark)',
    },
  },
  defaultCondition: false,
  properties: {
    backgroundColor: vars.colors,
    color: vars.colors,
  },
});

const space = {
  small: '4px',
  medium: '8px',
  large: '16px',
  xlarge: '32px',
  xxlarge: '64px',
};

const spaceProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { '@media': 'screen and (min-width: 1024px' },
  },
  defaultCondition: 'mobile',
  properties: {
    margin: space,
    padding: space,
  },
});

export const sprinkles = createSprinkles(colorProperties, spaceProperties);
