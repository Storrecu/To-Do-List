import React from 'react';
import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import '../styles/App.scss';

const defaultTodos = [
  { text: 'Hacer la comida', completed: true },
  { text: 'Tomar el curso de introducción a React.js', completed: false },
  { text: 'Ver una película de terror', completed: false },
  { text: 'Tender la ropa', completed: false },
  { text: 'Pasear al perro', completed: false },
  { text: 'LALALALA', completed: true },
];

const App = () => {
  // States
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  console.log(`Los usuarios buscan tareas de: ${searchValue}`);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Functions
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // Effects

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
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
