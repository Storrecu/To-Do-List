import React from 'react';
import '../styles/layout/TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        className="todo-search"
        type="text"
        placeholder="Cortar la cebolla"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
};

export { TodoSearch };
