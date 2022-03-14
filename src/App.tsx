import Component1 from './components/Example1';
import Component2 from './components/Example2';
import Component3 from './components/Example3';
import Card from './components/Example4';
import './styles/style.css';
import { theme } from './themes/theme.css';

export const App = () => {
  return (
    <div className={theme}>
      <Component1 />
      <Component2 />
      <Component3 />
      <Card />
    </div>
  );
};
