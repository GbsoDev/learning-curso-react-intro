import React from "react";

export function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log('entrada', searchValue);
  return (
    <input
      placeholder="mi tarea pendiente"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }} />
  );
}