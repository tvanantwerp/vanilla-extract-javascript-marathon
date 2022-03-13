import { sprinkles } from '../../sprinkles.css';

export default function Example2() {
  return (
    <>
      <h1>Styles using Sprinkles</h1>
      <div
        className={sprinkles({
          backgroundColor: { lightMode: 'blue', darkMode: 'red' },
          padding: { mobile: 'small', desktop: 'xlarge' },
        })}
      >
        This component uses sprinkles to display constrained styles based on
        conditions.
      </div>
    </>
  );
}
