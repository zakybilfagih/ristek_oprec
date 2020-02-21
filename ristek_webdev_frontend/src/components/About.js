import React, { useEffect } from "react";
import styled from "styled-components";
import RepoList from "./About/RepoList";

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
                        <RepoList />
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
