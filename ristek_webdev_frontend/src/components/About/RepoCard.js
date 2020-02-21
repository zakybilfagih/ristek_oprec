import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const RepoCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 276px;
    background: black;
    color: white;
    height: 80%;
    flex: 0 0 auto;

    .repo-header {
        font-family: "Josefin Sans";
        padding: 5px 10px;
        border-bottom: 1px solid white;
    }

    .repo-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 1em;
        overflow-y: auto;
    }

    .repo-content p {
        flex: 1;
        font-size: 17px;
        max-width: 200px;
    }

    .repo-content ul {
        font-size: 18px;
        padding-left: 1.2rem;
    }
`;

RepoCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    url: PropTypes.string
};

export default function RepoCard({ name, description, language, url }) {
    return (
        <RepoCardContainer>
            <div className="repo-header">
                <a href={url} target="_blank">
                    {name}
                </a>
            </div>
            <div className="repo-content">
                <p>
                    {description ? description : "No description available :("}
                </p>
                <ul>
                    <li>{language}</li>
                </ul>
            </div>
        </RepoCardContainer>
    );
}
