import { commentTypes } from "./types.js";

// GET COMMENTS
export const getComments = () => dispatch => {
    dispatch({ type: commentTypes.COMMENT_LOAD });
    fetch("/api/comment/")
        .then(r => r.json())
        .then(d => {
            dispatch({ type: commentTypes.COMMENT_SUCCESS_GET, payload: d });
        })
        .catch(e => {
            console.log(e);
            dispatch({ type: commentTypes.COMMENT_ERROR, payload: e });
        });
};

// ADD COMMENT
export const addComment = (name, text) => dispatch => {
    dispatch({ type: commentTypes.COMMENT_LOAD });
    fetch("/api/comment/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, text })
    })
        .then(r => r.json())
        .then(d => {
            dispatch({
                type: commentTypes.COMMENT_SUCCESS_ADD,
                payload: { name: d.name, text: d.text }
            });
        })
        .catch(e => {
            console.log(e);
            dispatch({ type: commentTypes.COMMENT_ERROR, payload: e });
        });
};
