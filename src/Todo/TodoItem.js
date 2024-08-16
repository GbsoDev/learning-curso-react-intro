import './TodoItem.css';
import { CompleteIcon } from '../icons/CompleteIcon';
import { DeleteIcon } from '../icons/DeleteIcon';

export function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={onComplete}/>
      <p className={`TodoItem-p ${pState(completed)}`}>{text}</p>
      <DeleteIcon onDelete={onDelete} />
      </li>
  );
}

function pState(completed) {
  return !!completed ? "TodoItem-p--completed" : "";
}

