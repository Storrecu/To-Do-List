import React from 'react';
import '../styles/layout/TodoItem.scss';

const TodoItem = (props) => {
  return (
    <>
      <li className="todo__list-item">
        <i className="fa-solid fa-check todo__list-item-check"></i>
        <p className="todo__list-item-text">{props.text}</p>
        <i className="fa-solid fa-xmark todo__list-item-cross"></i>
      </li>
    </>
  );
};

export { TodoItem };
