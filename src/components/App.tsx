import * as React from 'react';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';
import Footer from './Footer';

const component: React.SFC = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
};

export default component;
