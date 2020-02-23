import { repoTypes } from "./types.js";

export const getRepos = () => dispatch => {
    dispatch({ type: repoTypes.REPO_LOAD });
    fetch("https://api.github.com/users/mackarelfish/repos")
        .then(r => r.json())
        .then(d => {
            dispatch({ type: repoTypes.REPO_SUCESS, payload: d });
        })
        .catch(e => dispatch({ type: repoTypes.REPO_ERROR, payload: e }));
};
