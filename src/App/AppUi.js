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
import { TodoContext } from '../TodoContext';

export function AppUi() {
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
      {/* Primera forma de acceder al TodoContext.Consumer */}
      <TodoContext.Consumer>
        {({
          filteredTodos,
          loading,
          error,
          completeTodo,
          deleteTodo
        }) =>
        (<TodoList>
          {loading && <>  <TodosLoading /><TodosLoading /><TodosLoading /></>}
          {error && <TodosError />}
          {(!loading && !error && filteredTodos.length === 0) && <EmptyTodos />}
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>)}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  );
}