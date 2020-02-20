import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const OverlayContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Josefin Sans";
    color: white;
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: #1abc9c;
    animation: menu 0.2s ease-in;
    z-index: 999;

    @keyframes menu {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
    button {
        color: white;
        border: none;
        background: none;
        align-self: flex-end;
        margin-top: 60px;
        margin-right: 12px;
    }

    .container {
        height: 100%;
    }

    .container ul li {
        padding: 20px 0;
        list-style: none;
        text-align: center;
        font-size: 3rem;
    }

    .container ul {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

Overlay.propTypes = {
    vis: PropTypes.bool,
    setMenuOverlay: PropTypes.func
};

export default function Overlay({ vis, setMenuOverlay }) {
    return (
        <OverlayContainer>
            <button
                onClick={() => setMenuOverlay(false)}
                style={vis ? { marginTop: `${35}px` } : null}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                >
                    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                </svg>
            </button>
            <div className="container">
                <ul>
                    <li>
                        <a href="#about" onClick={() => setMenuOverlay(false)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => setMenuOverlay(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </OverlayContainer>
    );
}
