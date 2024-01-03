import React from 'react';
import '../styles/layout/TodoList.scss';

const TodoList = ({ children }) => {
  return (
    <>
      <ul className="todo__list">{children}</ul>
    </>
  );
};

export { TodoList };
