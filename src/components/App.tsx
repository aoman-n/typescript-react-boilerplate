import * as React from 'react';
import styled from 'styled-components';

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => <h1>Hello, {name}!!</h1>;

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Hello name="React & Typescript" />
      <h3>
        Count: {count}
        <Button onClick={() => setCount(count + 1)}>count up</Button>
      </h3>
    </>
  );
};

const Button = styled.button`
  font-size: 1.1rem;
  color: skyblue;
  border: solid 1px skyblue;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
    background: skyblue;
    transition: 0.4s;
  }
`;

export default App;
