import React from 'react';

import { buttonStyle } from './style.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: keyof typeof buttonStyle;
}

export default function Button({ children, onClick, color }: ButtonProps) {
  return (
    <button className={buttonStyle[color]} onClick={onClick}>
      {children}
    </button>
  );
}
