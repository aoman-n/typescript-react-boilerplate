import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import menu from './menu.png';

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
        <Button onClick={() => setCount(count + 1)}>count up</Button>
      </h3>
      <img src={menu} />
    </React.Fragment>
  );
};

const Button = styled.button`
  font-size: 1.1rem;
  color: skyblue;
  border: solid 1px skyblue;
  font-weight: bold;
  padding: 10px 15px;
  &:hover {
    color: white;
    background: skyblue;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
