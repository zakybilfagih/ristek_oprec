import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderContainer = styled.nav`
    position: fixed;
    font-family: "Josefin Sans";
    font-weight: 400;
    transform: translateY(20px);
    width: 100%;
    transition: all 0.5s ease;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1400px;
        width: 90%;
        margin: 0 auto;
    }

    .logo h2 {
        letter-spacing: -0.164em;
    }

    .nav {
        display: none;
        align-self: center;
    }

    .nav li {
        list-style: none;
        display: inline-block;
        margin-left: 40px;
        padding-right: 10px;
    }

    .toggle svg {
        display: block;
    }

    .toggle {
        height: 100%;
    }

    @media screen and (min-width: 800px) {
        .nav {
            display: flex;
        }

        .container {
            padding: 20px 0;
            padding-left: 10px;
        }

        .toggle {
            display: none;
        }

        .toggle svg {
            margin-right: 10px;
        }
    }
`;

Header.propTypes = {
    setMenuOverlay: PropTypes.func,
    scroll: PropTypes.number
};

export default function Header({ setMenuOverlay, scroll }) {
    const vis = scroll > 500;

    return (
        <HeaderContainer
            style={
                vis
                    ? {
                          transform: `translateY(${0}px)`,
                          background: "white",
                          fontSize: `${1.3}rem`,
                          position: "fixed"
                      }
                    : null
            }
        >
            <div
                className="container"
                style={vis ? { paddingTop: 0, paddingBottom: 0 } : null}
            >
                <div className="logo">
                    <h2>
                        <a href="#landing">zb.</a>
                    </h2>
                </div>
                <div
                    className="toggle"
                    onClick={() => setMenuOverlay(prevState => !prevState)}
                >
                    <svg
                        fill="#000000"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 26 26"
                        width="26px"
                        height="26px"
                    >
                        <path d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z" />
                    </svg>
                </div>
                <ul className="nav">
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
        </HeaderContainer>
    );
}
