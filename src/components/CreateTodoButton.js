import React from 'react';
import { useState } from 'react';
import { TodoModal } from './TodoModal';
import AddTaskButton from '../images/Button Open Modal.svg';
import '../styles/layout/CreateTodoButton.scss';

const CreateTodoButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(!false);
  };
  return (
    <>
      <div>
        <img
          onClick={() => {
            handleCloseModal();
          }}
          className="button__add-task"
          src={AddTaskButton}
          alt="button to add a new task on list"
        />
        {showModal && <TodoModal />}
      </div>
    </>
  );
};

export { CreateTodoButton };
