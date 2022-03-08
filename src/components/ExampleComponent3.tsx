import React from 'react';

import { button, buttonStyle } from '../style.css';

export const ExampleComponent3 = () => {
  return (
    <>
      <h1>Style Variant Buttons</h1>
      <button className={buttonStyle['primary']}>Primary Button</button>
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
};
