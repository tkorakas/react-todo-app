import { useState } from "react";
import { useTodos } from "../hooks/useTodos"


export const CreateTodo = ({createTodo}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createTodo(title);
        setTitle('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            <button type="submit">Create</button>
        </form>
    );
}

export const withCreateTodoData = (Component) => (props) => {
    const {createTodo} = useTodos();

    return <Component {...props} createTodo={(title) => createTodo(title)} />
}

export default withCreateTodoData(CreateTodo);