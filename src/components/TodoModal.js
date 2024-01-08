import React from 'react';
import { useState } from 'react';

const TodoModal = ({ handleShowModal, addNewTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddNewTodo = () => {
    if (newTodoText.trim() !== '') {
      addNewTodo(newTodoText);
      handleShowModal();
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Añade una nueva tarea</h3>
        </div>
        <div className="modal-body">
          <input
            type="text"
            placeholder="escribe una tarea"
            onChange={(e) => setNewTodoText(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button onClick={handleShowModal}>Cerrar</button>
          <button onClick={handleAddNewTodo}> Añadir tarea</button>
        </div>
      </div>
    </div>
  );
};

export { TodoModal };
