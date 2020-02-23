import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../actions/comment";

import Comment from "./Comment";

export default function Comments() {
    const comments = useSelector(state => state.comment.comments);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComments());
    }, []);

    return (
        <>
            {comments.map(comment => {
                return <Comment {...comment} key={comment.id} />;
            })}
        </>
    );
}
