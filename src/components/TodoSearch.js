import React from 'react';
import '../styles/layout/TodoSearch.scss';

const TodoSearch = () => {
  return (
    <>
      <input
        className="search__input"
        type="text"
        placeholder="Cortar la cebolla"
      />
    </>
  );
};

export { TodoSearch };
