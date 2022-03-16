import React from 'react';

import { button, buttonStyle } from './style.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Example3() {
  return (
    <>
      <h1>Style Variant Buttons</h1>
      <Button className={buttonStyle['primary']}>Primary Button</Button>
      <button className={buttonStyle.secondary}>Secondary Button</button>
      <h1>Recipe buttons</h1>
      <button className={button({ color: 'secondary', size: 'small' })}>
        Secondary Small Button
      </button>
      <button className={button({ color: 'destructive', size: 'large' })}>
        Destructive Large Button
      </button>
    </>
  );
}
