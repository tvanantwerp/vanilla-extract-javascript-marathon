import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const colors = {
  background: '#fefefe',
  text: '#333',
  primary: '#9C19E0',
  secondary: '#32C1CD',
};

const baseButtonStyle = style({
  border: 'none',
  borderRadius: 4,
  fontSize: '18px',
});

export const buttonStyle = styleVariants({
  primary: [
    baseButtonStyle,
    {
      backgroundColor: colors.primary,
      color: colors.background,
    },
  ],
  secondary: [
    baseButtonStyle,
    {
      backgroundColor: colors.secondary,
      color: colors.text,
    },
  ],
});

export const button = recipe({
  base: {
    border: 0,
    borderRadius: 4,
    color: 'white',
  },
  variants: {
    color: {
      primary: { backgroundColor: 'darkslateblue' },
      secondary: { backgroundColor: 'teal' },
      destructive: { backgroundColor: 'tomato' },
    },
    size: {
      small: { fontSize: 10, padding: 10 },
      medium: { fontSize: 16, padding: 14 },
      large: { fontSize: 20, padding: 18 },
    },
  },
  compoundVariants: [
    {
      variants: {
        color: 'destructive',
        size: 'large',
      },
      style: {
        borderColor: 'darkred',
        borderStyle: 'solid',
        borderWidth: 2,
        color: 'darkred',
        fontWeight: 700,
      },
    },
  ],
  defaultVariants: {
    color: 'primary',
    size: 'medium',
  },
});
