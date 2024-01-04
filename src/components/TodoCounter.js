import React from 'react';
import '../styles/layout/TodoCounter.scss';

const TodoCounter = ({
  total,
  completed,
  counterMessage,
  checkTodosCompleteds,
}) => {
  return (
    <>
      <h1 className="counter__title">
        {/* Has completado <span>{completed}</span> de <span>{total} </span>
        TODOs */}
      </h1>
    </>
  );
};

export { TodoCounter };
