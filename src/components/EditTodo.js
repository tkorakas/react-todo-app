import { useState } from "react";
import { useTodos } from "../hooks/useTodos"


export const EditTodo = ({todo, editTodo}) => {
    const [title, setTitle] = useState(todo.title);
    const handleSubmit = (event) => {
        event.preventDefault();
        editTodo(title)
    }
    return (
        <li>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <button type="submit">Edit</button>
            </form>
        </li>
    );
}

export const withEditTodoData = (Component) => (props) => {
    const {editTodo} = useTodos();
    const todoId = props.todo.id;

    return <Component {...props} editTodo={(title) => editTodo(todoId, title)} />
}

export default withEditTodoData(EditTodo);