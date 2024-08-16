import './CreateTodoButton.css';

export function CreateTodoButton(onClick) {
  return (
    <button className="CreateTodoButton" onClick={()=> onClick}>+</button>
  );
}