import { useTodos } from "../hooks/useTodos"

export const Todo = ({todo, toggleTodo, editTodo, deleteTodo}) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={toggleTodo}  />
            {todo.title}
            <button onClick={editTodo}>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </li>
    );
}

export const withTodoData = (Component) => (props) => {
    const {startEditingTodo, toggleTodo, deleteTodo} = useTodos();
    const todoId = props.todo.id;

    return <Component {...props} editTodo={() => startEditingTodo(todoId)} toggleTodo={() => toggleTodo(todoId)} deleteTodo={() => deleteTodo(todoId)} />
}

export default withTodoData(Todo);