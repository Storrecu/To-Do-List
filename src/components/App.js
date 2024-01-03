// import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/App.scss';

const App = () => {
  const defaultTodos = [
    { text: 'Hacer la comida', completed: true },
    { text: 'Tomar el curso de introducción a React.js', completed: false },
    { text: 'Ver una película de terror', completed: false },
    { text: 'Tender la ropa', completed: false },
    { text: 'Pasear al perro', completed: false },
  ];

  // States

  // Effects

  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        {}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};

export default App;
