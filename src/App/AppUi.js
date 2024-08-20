import './App.css';
import React from 'react';
import { CreateTodoButton } from '../Todo/CreateTodoButton';
import { TodoCounter } from '../Todo/TodoCounter';
import { TodoItem } from '../Todo/TodoItem';
import { TodoList } from '../Todo/TodoList';
import { TodoSearch } from '../Todo/TodoSearch';
import { TodosLoading } from '../Todo/TodosLoading';
import { TodosError } from '../Todo/TodosError';
import { EmptyTodos } from '../Todo/EmptyTodos';

export function AppUi({ searchValue, setSearchValue, filteredTodos, totalTodos, completedTodos, loading, error, onCompleteTodo, onDeleteTodo }) {
  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {loading && <>  <TodosLoading /><TodosLoading /><TodosLoading /></>}
        {error && <TodosError />}
        {(!loading && !error && filteredTodos.length === 0) && <EmptyTodos />}
        {filteredTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => onCompleteTodo(todo.text)}
            onDelete={() => onDeleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}