import { repoTypes } from "../actions/types.js";

const initialState = {
    loading: false,
    repos: [],
    error: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case repoTypes.REPO_LOAD:
            return {
                ...state,
                loading: true
            };
        case repoTypes.REPO_SUCESS:
            return {
                ...state,
                loading: false,
                repos: action.payload,
                error: ""
            };
        case repoTypes.REPO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
