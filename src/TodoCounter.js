import "./TodoCounter.css";

export function TodoCounter({ total, completed }) {
  return (<h1 className="TodoCounter">Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>);
}