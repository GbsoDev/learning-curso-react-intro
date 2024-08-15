import './TodoItem.css';

export function TodoItem({text, completed, onDelete}) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>V</span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>{text}</p>
      <span className="Icon Icon-delete" onClick={onDelete} >X</span>
    </li>
  );
}