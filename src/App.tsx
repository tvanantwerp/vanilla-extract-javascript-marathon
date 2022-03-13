import { useEffect, useState } from 'react';

import Component1 from './components/Example1';
import Component2 from './components/Example2';
import Component3 from './components/Example3';

export const App = () => {
  const [css, setCss] = useState<string | null>(null);

  useEffect(() => {
    const getCss = async () => {
      return await fetch('/main.css')
        .then(res => res.text())
        .then(res => setCss(res));
    };

    getCss();
  }, []);

  return (
    <div>
      <Component1 />
      <Component2 />
      <Component3 />
      <div>{css}</div>
    </div>
  );
};
