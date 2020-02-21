import { repoTypes } from "../actions/types.js";

const initialState = {
    repos: [],
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case repoTypes.REPO_GET:
            return {
                ...state,
                repos: action.payload,
                count: action.payload.length
            };
        default:
            return state;
    }
};
