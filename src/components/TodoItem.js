import React from 'react';
import '../styles/layout/TodoItem.scss';

const TodoItem = (props) => {
  return (
    <>
      <li className="todo_item">
        <span
          className={`icon iconCheck ${props.completed && 'iconCheck--active'}`}
          onClick={props.onComplete}
        >
          <i className="fa-solid fa-check"></i>
        </span>

        <p
          className={`todo_item-p ${
            props.completed && 'todo_item-p--completed'
          }`}
        >
          {props.text}
        </p>

        <span className={`icon iconDelete`} onClick={props.onDelete}>
          <i className="fa-solid fa-xmark"></i>
        </span>
      </li>
    </>
  );
};

export { TodoItem };
