import './App.css';
import React, { useContext } from 'react';
import { CreateTodoButton } from '../Todo/CreateTodoButton';
import { TodoCounter } from '../Todo/TodoCounter';
import { TodoItem } from '../Todo/TodoItem';
import { TodoList } from '../Todo/TodoList';
import { TodoSearch } from '../Todo/TodoSearch';
import { TodosLoading } from '../Todo/TodosLoading';
import { TodosError } from '../Todo/TodosError';
import { EmptyTodos } from '../Todo/EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../Todo/TodoForm';

export function AppUi() {
  const {
    todos,
    filteredTodos,
    loading,
    error,
    completeTodo,
    deleteTodo,
    modalState
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && <><TodosLoading /><TodosLoading /><TodosLoading /></>}
        {error && <TodosError />}
        {(!loading && !error && todos.length === 0) && <EmptyTodos />}
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      {modalState &&
        <Modal>
          <TodoForm />
        </Modal>
      }
    </>
  );
}