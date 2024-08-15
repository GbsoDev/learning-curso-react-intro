import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

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
  return (
    <>
      <TodoCounter total={10} completed={3}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onDelete={onDelete}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
      </>
  );
}

function onDelete(key){
  console.log('Borrando tarea: ', key);
}

export default App;
