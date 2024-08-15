import React from "react";

export function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input
      placeholder="mi tarea pendiente"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
  );
}