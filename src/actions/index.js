import * as types from './ActionTypes';

export function saveTodo(contents) {
    return {
        type: types.SAVE_TODO,
        contents,
    };
}