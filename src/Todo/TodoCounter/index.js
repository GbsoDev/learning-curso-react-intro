import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../TodoContext';

export function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (<h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h1>);
}