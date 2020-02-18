import React from "react";
import PropTypes from "prop-types";

Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    created_at: PropTypes.string
};

export default function Comment({ name, text, created_at }) {
    return (
        <div>
            <div>
                <h3>{name}</h3>
                <p>{created_at}</p>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}
