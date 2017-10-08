import * as types from '../actions/ActionTypes';

const initialState = {
    contents: ["nothing"],
};

const inputArea = (state, action) => {
    if (action.type === types.SAVE_TODO) {
        return {
            contents: [...state.contents, action.contents],
        };
    } else {
        return initialState;
    }
}

export default inputArea