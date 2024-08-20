import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const [searchValue, setSearchValue] = React.useState('');
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [modalState, setModalState] = React.useState(false)

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const deleteTodo = (key) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.text === key);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const completeTodo = (key) => {
        const updatedTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.text === key);
        updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
        saveTodos(updatedTodos);
    }

    const newTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({ text, completed: false });
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={
            {
                todos,
                searchValue,
                setSearchValue,
                filteredTodos,
                totalTodos,
                completedTodos,
                loading,
                error,
                completeTodo,
                deleteTodo,
                modalState,
                setModalState,
                newTodo
            }
        }>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }
