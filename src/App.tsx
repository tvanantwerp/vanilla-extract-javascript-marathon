import { useEffect, useState } from 'react';

import { ExampleComponent1 } from './components/ExampleComponent1';
import { ExampleComponent2 } from './components/ExampleComponent2';
import { ExampleComponent3 } from './components/ExampleComponent3';

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
      <ExampleComponent1 />
      <ExampleComponent2 />
      <ExampleComponent3 />
      <div>{css}</div>
    </div>
  );
};
