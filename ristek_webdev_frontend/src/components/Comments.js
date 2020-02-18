import React, { useEffect } from "react";

import { getComments, addComment } from "../actions/comment";
import { useDispatch, useSelector } from "react-redux";

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.comments);
    useEffect(() => {
        dispatch(getComments());
    }, []);

    return (
        <>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h1>{comment.name}</h1>
                        <p>{comment.text}</p>
                    </div>
                );
            })}
        </>
    );
};

export default Comments;
