import React from 'react';
import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoModal } from './TodoModal';
import ls from '../services/localStorage';
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
  const [todos, setTodos] = useState(ls.get('updatedTasks', defaultTodos));
  const [counterMessage, setCounterMessage] = useState('');

  // Effects:
  useEffect(() => {
    ls.set('updatedTasks', todos);
  }, [todos]);

  // Filters
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // Functions
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const checkTodosCompleteds = () => {
    if (totalTodos === 0) {
      setCounterMessage('No hay tareas pendientes.');
    } else if (completedTodos === totalTodos) {
      setCounterMessage('Has completado todas las tareas pendientes.');
    } else {
      setCounterMessage(
        `Has completado ${completedTodos} de ${totalTodos} tareas.`
      );
    }
  };

  const addNewTodo = (newTodoText) => {
    const newTodos = [...todos];
    const isTodoExists = newTodos.some((todo) => todo.text === newTodoText);
    if (isTodoExists) {
      alert('Esa tarea ya está en la lista');
    } else {
      const newTodo = { text: newTodoText, completed: false };
      setTodos([...newTodos, newTodo]);
    }
  };

  return (
    <>
      <TodoCounter
        counterMessage={counterMessage}
        onCheckTodosCompleteds={checkTodosCompleteds}
      />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        {}
      </TodoList>

      <CreateTodoButton addNewTodo={addNewTodo}>
        <TodoModal />
      </CreateTodoButton>
    </>
  );
};

export default App;
