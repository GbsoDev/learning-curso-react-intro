import { TodoIcon } from ".";

export function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon type="delete" color="gray" onClick={onDelete} />
  );
}