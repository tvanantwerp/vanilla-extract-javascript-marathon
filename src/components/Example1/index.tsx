import { exampleStyle } from './style.css';

export default function Example1() {
  return (
    <>
      <h1>Basic Style</h1>
      <div className={exampleStyle}>
        This component will have a blue background, white text color, and
        padding of 1.5 rem.
      </div>
    </>
  );
}
