import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [dataLoad, setDataLoad] = useState(0);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]); // utiliser le state et le "setter" associé
    };

    const loadTodos = async () => {
        // async
        console.log('avant le fetch');
        const response = await fetch('https://dummyjson.com/todos?limit=10')
        const json = await response.json();
        setTodos(json.todos);
        console.log('apres le fetch');
        setDataLoad(1);
    }

    useEffect(() => {
       console.log('avant le loadTodos');
       if(!dataLoad) loadTodos();
       console.log('apres le loadTodos');
    }, [dataLoad]);

    return (
        <div>
            <h1>Todo App</h1>
            <AddTodo onSubmit={addTodo} />
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoApp;
