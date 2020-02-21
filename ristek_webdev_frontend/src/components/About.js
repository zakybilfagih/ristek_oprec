import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../actions/repo";

const AboutContainer = styled.section`
    .container {
        max-width: 1400px;
        width: 90%;
        margin: 0 auto;
        display: flex;
    }

    .content {
        font-family: "Josefin Sans";
        margin: 100px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .section-text {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .text-intro p {
        font-family: "Open Sans";
        line-height: 40px;
    }

    h1 span {
        color: white;
        background-color: black;
    }

    .section-graphic {
        display: flex;
        align-items: center;
        margin: 0 auto;
        flex: 1;
    }

    .section-graphic img {
        width: 100%;
        display: block;
        max-width: 450px;
        margin-top: 50px;
    }

    .text-stack ul li {
        font-family: "Open Sans";
        list-style: decimal;
    }

    .text-stack span {
        font-size: 1rem;
    }

    .github-repos {
        height: 250px;
    }

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
    .repo-card {
        display: flex;
        flex-direction: column;
        min-width: 276px;
        background: black;
        color: white;
        height: 80%;
        flex: 0 0 auto;
    }

    .repo-header {
        font-family: "Josefin Sans";
        padding: 5px 10px;
        border-bottom: 1px solid white;
    }

    .repo-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        overflow-y: auto;
    }

    .repo-content p {
        flex: 1;
        font-size: 20px;
    }

    .repo-content ul {
        font-size: 18px;
        padding-left: 1.2rem;
    }

    @media screen and (min-width: 800px) {
        .content {
            flex-direction: row;
        }

        .section-text {
            width: 60%;
        }

        .section-graphic {
            justify-content: flex-end;
            margin-left: 30px;
        }

        .section-graphic img {
            margin-top: 0;
        }

        .text-intro p {
            width: 80%;
        }
    }
`;

export default function About() {
    const dispatch = useDispatch();
    const reposData = useSelector(state => state.repo.repos);

    useEffect(() => {
        dispatch(getRepos());
    }, []);

    return (
        <AboutContainer id="about">
            <div className="container">
                <div className="content">
                    <div className="section-text">
                        <div className="text-intro">
                            <h1>
                                I like to <span>create</span> things!
                            </h1>
                            <p>
                                Lahir di Jakarta, suka bermain ping-pong.
                                Sekarang sedang berkuliah di Universitas
                                Indonesia jurusan Ilmu Komputer.
                            </p>
                        </div>
                        <div className="text-stack">
                            <h3>
                                Things I've learned
                                <span> (and still learning..)</span>
                            </h3>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>
                                    Javascript (ES6) <span>async, closure</span>
                                </li>
                                <li>
                                    React <span>(redux, nextjs)</span>, Vue{" "}
                                    <span>(nuxt)</span>
                                </li>
                                <li>
                                    Python <span>(django, flask)</span>
                                </li>
                                <li>
                                    Node.js <span>(express)</span>
                                </li>
                            </ul>
                        </div>

                        <h3>See my ongoing projects!</h3>
                        <div className="github-repos">
                            <div className="repo-container">
                                {reposData.map(repo => {
                                    return (
                                        <div
                                            className="repo-card"
                                            key={repo.id}
                                        >
                                            <div className="repo-header">
                                                {repo.name}
                                            </div>
                                            <div className="repo-content">
                                                <p>
                                                    {repo.description
                                                        ? repo.description
                                                        : "No description available :("}
                                                </p>
                                                <ul>
                                                    <li>{repo.language}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="section-graphic">
                        <img
                            src="../../static/ristek_webdev_frontend/img/prof.jpg"
                            alt="profile image of the man, THE DUDE, zaky bilfagih"
                        />
                    </div>
                </div>
            </div>
        </AboutContainer>
    );
}
