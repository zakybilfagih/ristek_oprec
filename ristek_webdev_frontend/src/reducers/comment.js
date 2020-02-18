import { commentTypes } from "../actions/types.js";

const initialState = {
    comments: [],
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case commentTypes.GET:
            return {
                ...state,
                comments: action.payload,
                count: action.payload.length
            };
        case commentTypes.ADD:
            return {
                ...state,
                comments: [...state.comments, action.payload],
                count: state.comments.length + 1
            };
        default:
            return state;
    }
};
