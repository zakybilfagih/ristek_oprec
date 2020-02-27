import React, { useState } from "react";
import styled from "styled-components";
import Comments from "./Contact/Comments";
import { useDispatch } from "react-redux";
import { addComment } from "../actions/comment";

const ContactContainer = styled.section`
    background: #11aa44;
    height: initial !important;
    min-height: 100vh;

    .container {
        max-width: 1400px;
        width: 90%;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }

    .content {
        font-family: "Josefin Sans";
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 100px;
        width: 100%;
    }

    .content-right,
    .content-left {
        flex: 1;
    }

    .content-left h1 {
        text-align: center;
    }

    .content-left button {
        margin-top: 20px;
        padding: 0.2em;
    }

    .content-right {
        overflow-y: auto;
        justify-content: flex-end;
        height: 360px;
    }

    .content-right > div {
        margin: 20px 0 20px auto;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    form > * {
        padding: 0.6em;
    }

    @media screen and (min-width: 800px) {
        height: 100vh !important;
        min-height: 0;
        font-size: 1.3rem;

        .content {
            flex-direction: row;
        }

        .content-left h1 {
            text-align: left;
        }

        .content-right {
            align-self: center;
        }

        .content-right > div {
            width: 90%;
        }

        form {
            max-width: 550px;
        }
    }
`;

export default function Contact() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    return (
        <ContactContainer id="contact">
            <div className="container">
                <div className="content">
                    <div className="content-left">
                        <h1>Leave me a comment!</h1>
                        <div className="comment-form">
                            <form>
                                <input
                                    value={name}
                                    type="text"
                                    name="name"
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Name..."
                                />
                                <textarea
                                    name="text"
                                    value={text}
                                    onChange={e => setText(e.target.value)}
                                    placeholder="Your lovely comment.."
                                    cols="30"
                                    rows="9"
                                ></textarea>
                            </form>
                        </div>
                        <button
                            onClick={() => dispatch(addComment(name, text))}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="content-right">
                        <Comments />
                    </div>
                </div>
            </div>
        </ContactContainer>
    );
}
