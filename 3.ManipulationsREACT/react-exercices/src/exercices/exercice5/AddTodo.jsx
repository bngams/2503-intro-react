import { useState } from "react";

function AddTodo({onAddTodo}) {
    const [todo, setTodo] = useState("");

    const handleChange = (event) => {
      setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('value from state: ', todo);
        console.log('value from html form: ', event.target.todo.value);
        onAddTodo({
            id: Math.random().toString(36).substr(2, 9),
            todo: todo,
            completed: false,
            userId: 1
        });
    };

    return (
        <>
            <h2>Formulaire tâche</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" value={todo} onChange={handleChange} />
                <button type="submit">Ajouter</button>
            </form>
        </>
    );
}

export default AddTodo;