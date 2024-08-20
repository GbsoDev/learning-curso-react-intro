import './App.css';
import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';

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


  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
