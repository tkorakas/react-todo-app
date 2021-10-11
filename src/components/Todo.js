import { useTodos } from "../hooks/useTodos"

export const Todo = ({todo, toggleTodo, editTodo, deleteTodo}) => {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={toggleTodo}  />
                {todo.title}
            </label>
            <button onClick={editTodo}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}

export const withTodoData = (Component) => (props) => {
    const {startEditingTodo, toggleTodo, deleteTodo} = useTodos();
    const todoId = props.todo.id;

    return <Component {...props} editTodo={() => startEditingTodo(todoId)} toggleTodo={() => toggleTodo(todoId)} deleteTodo={deleteTodo} />
}

export default withTodoData(Todo);