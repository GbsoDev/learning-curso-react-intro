import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";
import React from "react";

export function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input className="TodoSearch"
      placeholder="mi tarea pendiente"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
  );
}