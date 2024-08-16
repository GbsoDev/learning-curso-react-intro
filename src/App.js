import './App.css';
import React from 'react';
import { CreateTodoButton } from './Todo/CreateTodoButton';
import { TodoCounter } from './Todo/TodoCounter';
import { TodoItem } from './Todo/TodoItem';
import { TodoList } from './Todo/TodoList';
import { TodoSearch } from './Todo/TodoSearch';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false }, 
  { text: 'Tomar el curso de intro a React', completed: true }, 
  { text: 'Llorar con la llorona', completed: false }, 
  { text: 'Llamar a mi mamá', completed: false }, 
  { text: 'Hacer la comida', completed: false }, 
  { text: 'Hacer la tarea de matemáticas', completed: false }, 
  { text: 'Hacer la tarea de historia', completed: true }, 
  { text: 'Hacer la tarea de español', completed: false }, 
  { text: 'Hacer la tarea de inglés', completed: false }, 
  { text: 'Hacer la tarea de física', completed: false }
];

function App() {
  
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
      </>
  );

  function deleteTodo(key){
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === key);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  function completeTodo(key){
    const updatedTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === key);
    updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
    setTodos(updatedTodos);
  }

  function newTodo(text){
    const newTodos = [...todos];
    newTodos.push({text, completed: false});
    setTodos(newTodos);
  }
}

export default App;
