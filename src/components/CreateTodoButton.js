import React from 'react';
import '../styles/layout/CreateTodoButton.scss';
import AddTaskButton from '../images/Button Open Modal.svg';

const CreateTodoButton = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};

export { CreateTodoButton };
