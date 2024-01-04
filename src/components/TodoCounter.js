import React from 'react';
import '../styles/layout/TodoCounter.scss';

const TodoCounter = ({ counterMessage, onCheckTodosCompleteds }) => {
  onCheckTodosCompleteds();
  return (
    <>
      <h1 className="counter__title">{counterMessage}</h1>
    </>
  );
};

export { TodoCounter };
