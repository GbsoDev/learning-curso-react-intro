import { TodoIcon } from ".";

export function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon type="check" color={checkColor(completed)} onClick={onComplete} />
  );
}

function checkColor(completed) {
  return !!completed ? "green" : "gray";
}