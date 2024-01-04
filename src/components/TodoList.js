import React from 'react';
import '../styles/layout/TodoList.scss';

const TodoList = ({ children }) => {
  return (
    <>
      <h2>Lista de tareas</h2>
      <ul className="todo__list">{children}</ul>
    </>
  );
};

export { TodoList };
