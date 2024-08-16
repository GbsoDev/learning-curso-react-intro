import './App.css';
import React from 'react';
import { CreateTodoButton } from '../Todo/CreateTodoButton';
import { TodoCounter } from '../Todo/TodoCounter';
import { TodoItem } from '../Todo/TodoItem';
import { TodoList } from '../Todo/TodoList';
import { TodoSearch } from '../Todo/TodoSearch';

export function AppUi({searchValue, setSearchValue, filteredTodos, totalTodos, completedTodos, onCompleteTodo, onDeleteTodo}) {
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
      <CreateTodoButton/>
      </>
  );
}