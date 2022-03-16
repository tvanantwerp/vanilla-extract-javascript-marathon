import React from 'react';

import { buttonStyle } from './style.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}
