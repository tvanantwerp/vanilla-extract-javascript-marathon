import { style, styleVariants } from '@vanilla-extract/css';

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
      backgroundColor: 'rgb(100, 70, 240)',
      ':hover': {
        backgroundColor: 'rgb(60, 70, 230)',
      },
    },
  ],
  red: [
    baseButtonStyle,
    {
      backgroundColor: 'rgb(240, 70, 100)',
      ':hover': {
        backgroundColor: 'rgb(230, 70, 60)',
      },
    },
  ],
});
