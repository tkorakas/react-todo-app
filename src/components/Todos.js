import { useTodos } from "../hooks/useTodos"
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";
import Filters from "./Filters";
import Todo from "./Todo";

export const Todos = ({todos, editingTodo}) => {
    return (
        <div>
            <CreateTodo />
            <Filters />
            <ul>
            {todos.map(todo => {
                if (editingTodo === todo.id) {
                    return <EditTodo key={todo.id} todo={todo} />
                }
                return <Todo key={todo.id} todo={todo} />
            })}
        </ul>
        </div>
    );
}

export const withTodosData = (Component) => (props) => {
    const {todos, editingTodo} = useTodos();

    console.log(todos);
    return <Component {...props} todos={todos} editingTodo={editingTodo} />
}

export default withTodosData(Todos);