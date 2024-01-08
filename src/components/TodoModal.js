import React from 'react';
import { useState } from 'react';
import '../styles/layout/TodoModal.scss';

const TodoModal = ({ handleShowModal, addNewTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddNewTodo = () => {
    if (newTodoText.trim() !== '') {
      addNewTodo(newTodoText);
      handleShowModal();
    }
  };
  return (
    <section className="todo-modal">
      <article className="todo-modal-content">
        <header className="todo-modal-content-header">
          <h2 className="todo-modal-content-header-title">
            Añadir nueva tarea
          </h2>
        </header>
        <div className="todo-modal-content-body">
          <input
            className="todo-search"
            type="text"
            placeholder="Escribe una tarea"
            onChange={(e) => setNewTodoText(e.target.value)}
          />
        </div>
        <footer className="todo-modal-content-footer">
          <button onClick={handleShowModal}>Cerrar sección</button>
          <button onClick={handleAddNewTodo}> Añadir tarea</button>
        </footer>
      </article>
    </section>
  );
};

export { TodoModal };
