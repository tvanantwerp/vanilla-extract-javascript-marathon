import React from 'react';

import { exampleStyle } from '../style.css';

export const ExampleComponent1 = () => {
  return (
    <>
      <h1>Basic Style</h1>
      <div className={exampleStyle}>
        This component will have a blue background, white text color, and
        padding of 1.5 rem.
      </div>
    </>
  );
};
