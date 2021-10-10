import { CREATE_TODO, DELETE_TODO, SHOW_ALL, START_EDITING_TODO, TOGGLE_TODO, EDIT_TODO } from "./actions";

export const initialState = {
    todos: [],
    editingTodo: null,
    filter: SHOW_ALL
};

export const reducer = (state = initialState, action) => {
    if (action.type === CREATE_TODO) {
        const todos = [
            ...state.todos,
            action.payload
        ];
        return {
            ...state,
            todos
        }
    }
    if (action.type === EDIT_TODO) {
        const todos = state.todos.map(todo => {
            if (todo.id === action.payload.id) {
                console.log(action.payload.title);
                return {
                    ...todo,
                    title: action.payload.title
                }
            }
            return todo;
        });
        return {
            ...state,
            editingTodo: null,
            todos
        }
    }

    if (action.type === TOGGLE_TODO) {
        const todos = state.todos.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });
        return {
            ...state,
            todos
        }
    }

    if (action.type === DELETE_TODO) {
        const todos = state.todos.filter(todo => {
            return todo.id !== action.payload
        });
        return {
            ...state,
            todos
        }
    }

    if (action.type === START_EDITING_TODO) {
        return {
            ...state,
            editingTodo: action.payload
        }
    }

    return state;
}