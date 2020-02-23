import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentContainer = styled.div`
    color: white;
    background: black;
    padding: 0;

    .comment_container {
        display: flex;
        flex-direction: column;
    }

    .comment_header {
        font-size: 1rem;
        border-bottom: 1px solid white;
    }

    .comment_headercontainer {
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin: 0 auto;
        align-items: center;
    }

    .comment_headercontainer p {
        font-size: 1rem;
    }

    .comment_content {
        flex: 1;
        width: 95%;
        margin: 0 auto;
        font-size: 1rem;
    }
`;

Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    created_at: PropTypes.string
};

const parseDate = dateString => {
    let dateObj = new Date(dateString);
    return `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
};

export default function Comment({ name, text, created_at }) {
    return (
        <CommentContainer>
            <div className="comment_container">
                <div className="comment_header">
                    <div className="comment_headercontainer">
                        <h3>{name}</h3>
                        <p>{parseDate(created_at)}</p>
                    </div>
                </div>
                <div className="comment_content">
                    <p>{text}</p>
                </div>
            </div>
        </CommentContainer>
    );
}
