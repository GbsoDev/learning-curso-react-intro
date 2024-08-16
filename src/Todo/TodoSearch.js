import "./TodoSearch.css";
import React from "react";

export function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input className="TodoSearch"
      placeholder="mi tarea pendiente"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
  );
}