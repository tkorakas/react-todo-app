export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const SHOW_ALL = 'ALL';
export const SHOW_COMPLETED  = 'COMPLETED';
export const SHOW_TODO = 'TODO';

export const START_EDITING_TODO = 'START_EDITING_TODO'

export const createTodoAction = (todo) => ({type: CREATE_TODO, payload: todo});
export const editTodoAction = (id, title) => ({type: EDIT_TODO, payload: {id, title}});
export const toggleTodoAction = (id) => ({type: TOGGLE_TODO, payload: id});
export const deleteTodoAction = (id) => ({type: DELETE_TODO, payload: id});
export const startEditingTodoAction = (id) => ({type: START_EDITING_TODO, payload: id});