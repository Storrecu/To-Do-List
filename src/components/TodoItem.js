import React from 'react';
import '../styles/layout/TodoItem.scss';
import X from '../images/X.png';
import Check from '../images/Check.png';

const TodoItem = (props) => {
  return (
    <>
      <li className="todo__list-item">
        <img
          className="todo__list-item-check"
          src={Check}
          alt="cheked symbol"
        />
        <p className="todo__list-item-text">{props.text}</p>
        <img
          className="todo__list-item-cross"
          src={X}
          alt="cross symbol for close task"
        />
      </li>
    </>
  );
};

export { TodoItem };
