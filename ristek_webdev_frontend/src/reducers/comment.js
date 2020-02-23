import { commentTypes } from "../actions/types.js";

const initialState = {
    loading: false,
    comments: [],
    error: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case commentTypes.COMMENT_LOAD:
            return {
                ...state,
                loading: true
            };
        case commentTypes.COMMENT_SUCCESS_GET:
            return {
                ...state,
                comments: action.payload,
                loading: false
            };
        case commentTypes.COMMENT_SUCCESS_ADD:
            return {
                ...state,
                comments: [action.payload, ...state.comments],
                loading: false
            };
        case commentTypes.COMMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
