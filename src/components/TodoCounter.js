import React from 'react';
import '../styles/layout/TodoCounter.scss';

const TodoCounter = ({ total, completed }) => {
  return (
    <>
      <h1 className="counter__title">
        Has completado <strong>{completed}</strong> de <strong>{total} </strong>
        TODOs
      </h1>
    </>
  );
};

export { TodoCounter };
