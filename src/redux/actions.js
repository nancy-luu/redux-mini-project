import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content: todo
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});