import React from 'react';
import { useEffect } from 'react';
import '../styles/layout/TodoCounter.scss';

const TodoCounter = ({ counterMessage, onCheckTodosCompleteds }) => {
  useEffect(() => {
    onCheckTodosCompleteds();
  }, [onCheckTodosCompleteds]);

  return (
    <>
      <h1 className="counter__title">{counterMessage}</h1>
    </>
  );
};

export { TodoCounter };
