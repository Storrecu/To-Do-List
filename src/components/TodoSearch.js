import React from 'react';
import '../styles/layout/TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <h2>Buscar tarea</h2>
      <input
        className="todo-search"
        type="text"
        placeholder="Ej. Hacer la compra"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
};

export { TodoSearch };
