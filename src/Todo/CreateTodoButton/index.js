import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../../TodoContext';

export function CreateTodoButton() {
  const { setModalState } = React.useContext(TodoContext);
  return (
    <button className="CreateTodoButton" onClick={() => setModalState(state => !state)}>+</button>
  );
}