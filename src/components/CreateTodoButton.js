import React from 'react';
import { useState } from 'react';
import '../styles/layout/CreateTodoButton.scss';
import AddTaskButton from '../images/Button Open Modal.svg';

const CreateTodoButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img
          onClick={(event) => {
            console.log('has clickado al botón añadir tarea');
            console.log(event);
            console.log(event.target);
          }}
          className="button__add-task"
          src={AddTaskButton}
          alt="button to add a new task on list"
        />
        {showTooltip && <div className="tooltip"> Añade una nueva tarea </div>}
      </div>
    </>
  );
};

export { CreateTodoButton };
