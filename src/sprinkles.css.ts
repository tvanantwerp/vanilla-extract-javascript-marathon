import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

const colors = {
  red: '#FF5151',
  blue: '#88E0EF',
  green: '#17D7A0',
};

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      '@media': '(prefers-color-scheme: light)',
    },
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: false,
  properties: {
    color: colors,
    backgroundColor: colors,
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
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    margin: space,
    padding: space,
  },
});

export const sprinkles = createSprinkles(colorProperties, spaceProperties);
