import React from 'react';
import '../styles/layout/TodoItem.scss';

const TodoItem = (props) => {
  return (
    <>
      <li className="todo__list-item">
        <span className="todo__list-item-tick">V</span>
        <p className="todo__list-item-text">{props.text}</p>
        <span className="todo__list-item-cross">X</span>
      </li>
    </>
  );
};

export { TodoItem };
