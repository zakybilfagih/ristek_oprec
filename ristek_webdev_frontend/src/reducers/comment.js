import { commentTypes } from "../actions/types.js";

const initialState = {
    comments: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case commentTypes.GET:
            return {
                ...state,
                comments: action.payload
            };
        case commentTypes.ADD:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            };
        default:
            return state;
    }
};
