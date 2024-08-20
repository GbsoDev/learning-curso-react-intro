import React from "react";
import './TodoForm.css'
import { TodoContext } from "../../TodoContext";

export function TodoForm() {
    const { setModalState, newTodo } = React.useContext(TodoContext);
    const [textValue, setTextValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        newTodo(textValue);
        setModalState(false);
    }

    const cancel = () => {
        setModalState(false);
    }

    const onTextChange = (event) => {
        setTextValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Regustra un nuevo TODO</label>
            <textarea placeholder="TEXTO AQUÍ" value={textValue} onChange={onTextChange}></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" onClick={cancel} >Cancelar</button>
                <button className="TodoForm-button TodoForm-button--add" >Añadir</button>
            </div>
        </form>
    );
}