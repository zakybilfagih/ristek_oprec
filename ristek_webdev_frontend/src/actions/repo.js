import { repoTypes } from "./types.js";

export const getRepos = () => dispatch => {
    fetch("https://api.github.com/users/mackarelfish/repos")
        .then(r => r.json())
        .then(d => {
            dispatch({ type: repoTypes.REPO_GET, payload: d });
        })
        .catch(e => console.log(e));
};
