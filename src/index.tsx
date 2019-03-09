import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => <h1>Hello, {name}!!</h1>;

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <React.Fragment>
      <Hello name="React & Typescript" />
      <h3>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>count up</button>
      </h3>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
