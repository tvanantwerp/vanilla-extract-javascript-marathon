import { useState } from 'react';

import Button from './components/Button';
import './styles/style.css';

export const App = () => {
  const [counts, setCounts] = useState({ count1: 0, count2: 0 });
  return (
    <div>
      <Button
        color="purple"
        onClick={() =>
          setCounts({ count1: counts.count1 + 1, count2: counts.count2 })
        }
      >
        {`Clicked me ${counts.count1} times.`}
      </Button>
      <Button
        color="red"
        onClick={() =>
          setCounts({ count1: counts.count1, count2: counts.count2 + 1 })
        }
      >
        {`Clicked me ${counts.count2} times.`}
      </Button>
    </div>
  );
};
