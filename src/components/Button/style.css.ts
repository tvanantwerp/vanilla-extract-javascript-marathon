import { style } from '@vanilla-extract/css';

export const buttonStyle = style({
  backgroundColor: 'rgb(100, 70, 240)',
  color: 'white',
  cursor: 'pointer',
  borderRadius: '4px',
  border: 'none',
  fontSize: '24px',
  padding: '18px;',
  transition: 'background-color 0.2s ease-in-out',
  ':hover': {
    backgroundColor: 'rgb(60, 70, 230)',
  },
});
