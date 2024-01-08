import React from 'react';
import { useState } from 'react';
import { TodoModal } from './TodoModal';
import AddTaskButton from '../images/Button Open Modal.svg';
import '../styles/layout/CreateTodoButton.scss';

const CreateTodoButton = ({ addNewTodo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div>
        <img
          onClick={() => {
            handleShowModal();
          }}
          className="button__add-task"
          src={AddTaskButton}
          alt="button to add a new task on list"
        />
        {showModal && (
          <TodoModal
            handleShowModal={handleShowModal}
            addNewTodo={addNewTodo}
          />
        )}
      </div>
    </>
  );
};

export { CreateTodoButton };
