import React from 'react';
// import { useEffect } from 'react';

const TodoModal = ({ handleShowModal }) => {
  // useEffect(() => {
  //   handleShowModal();
  // }, [handleShowModal]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Añade una nueva tarea</h3>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="escribe una tarea" />
        </div>
        <div className="modal-footer">
          <button onClick={handleShowModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export { TodoModal };
