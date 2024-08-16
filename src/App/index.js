import './App.css';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUi } from './AppUi';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false }, 
//   { text: 'Tomar el curso de intro a React', completed: true }, 
//   { text: 'Llorar con la llorona', completed: false }, 
//   { text: 'Llamar a mi mamá', completed: false }, 
//   { text: 'Hacer la comida', completed: false }, 
//   { text: 'Hacer la tarea de matemáticas', completed: false }, 
//   { text: 'Hacer la tarea de historia', completed: true }, 
//   { text: 'Hacer la tarea de español', completed: false }, 
//   { text: 'Hacer la tarea de inglés', completed: false }, 
//   { text: 'Hacer la tarea de física', completed: false }
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const deleteTodo = (key) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === key);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const completeTodo = (key) => {
    const updatedTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === key);
    updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
    saveTodos(updatedTodos);
  }

  const newTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({ text, completed: false });
    saveTodos(newTodos);
  }

  return (
    <AppUi 
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      filteredTodos = {filteredTodos}
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      onCompleteTodo = {completeTodo}
      onDeleteTodo = {deleteTodo} />
  );
}

export default App;
