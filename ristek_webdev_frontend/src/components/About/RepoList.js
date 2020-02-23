import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../actions/repo";
import RepoCard from "./RepoCard";

const RepoListContainer = styled.div`
    height: 250px;

    .repo-container {
        font-family: "Open Sans";
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        overflow-x: auto;
        background: #11aa44;
        padding: 0 20px;
    }

    .repo-container > * {
        margin-right: 20px;
    }
`;

export default function RepoList() {
    const dispatch = useDispatch();
    const reposData = useSelector(state => state.repo.repos);

    useEffect(() => {
        dispatch(getRepos());
    }, []);

    return (
        <RepoListContainer>
            <div className="repo-container">
                {reposData.map(repo => (
                    <RepoCard
                        {...{
                            name: repo.name,
                            description: repo.description,
                            language: repo.language,
                            url: repo.html_url
                        }}
                        key={repo.html_url}
                    />
                ))}
            </div>
        </RepoListContainer>
    );
}
