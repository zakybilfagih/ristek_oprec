import { commentTypes } from "./types.js";

// GET COMMENTS
export const getComments = () => dispatch => {
    fetch("/api/comment/")
        .then(r => r.json())
        .then(d => {
            dispatch({ type: commentTypes.GET, payload: d });
        })
        .catch(e => console.log(e));
};

// ADD COMMENT
export const addComment = (name, text) => dispatch => {
    fetch("/api/comment/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, text })
    })
        .then(r => r.json())
        .then(d => {
            console.log("heyy");
            dispatch({
                type: commentTypes.ADD,
                payload: { name: d.name, text: d.text }
            });
        })
        .catch(e => console.log(e));
};
