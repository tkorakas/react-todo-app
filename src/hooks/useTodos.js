import { useCallback, useContext, useMemo } from "react"
import { TodosContext } from "../state/context";
import {ulid} from 'ulid';
import { createTodoAction, deleteTodoAction, startEditingTodoAction, SHOW_COMPLETED, SHOW_TODO, toggleTodoAction, editTodoAction } from "../state/actions";

export const useTodos = () => {
    const {state, dispatch} = useContext(TodosContext);

    const createTodo = useCallback((title) => {
        const todo = {
            title,
            id: ulid(),
            completed: false
        };
        dispatch(createTodoAction(todo));
    }, [dispatch]);

    const editTodo = useCallback((id, title) => {
        dispatch(editTodoAction(id, title))
    }, [dispatch]);

    const toggleTodo = useCallback((id) => {
        dispatch(toggleTodoAction(id));
    }, [dispatch]);

    const deleteTodo = useCallback((id) => {
        dispatch(deleteTodoAction(id))
    }, [dispatch]);

    const startEditingTodo = useCallback((id) => {
        dispatch(startEditingTodoAction(id));
    }, [dispatch]);

    const todos = useMemo(() => {
        return state.todos.filter(todo => {
            if (state.filter === SHOW_COMPLETED) {
                return todo.completed;
            }
            if (state.filter === SHOW_TODO) {
                return !todo.completed;
            }
            return todo;
        })
    }, [state.filter, state.todos]);

    return useMemo(() => ({
        ...state,
        todos,
        createTodo,
        deleteTodo,
        startEditingTodo,
        toggleTodo,
        editTodo
    }), [createTodo, deleteTodo, editTodo, startEditingTodo, state, todos, toggleTodo])
}