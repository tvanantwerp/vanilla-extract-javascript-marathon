import { useState } from 'react';

import Button from './components/Button';

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>
        {`Clicked me ${count} times.`}
      </Button>
    </div>
  );
};
