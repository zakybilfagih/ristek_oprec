import React from "react";

import styled from "styled-components";

const HeaderContainer = styled.nav`
    background: blue;
    position: fixed;
    top: 0;
    width: 100%;

    .container {
        padding: 0 20px;
        background: red;
        display: flex;
        justify-content: space-between;
        max-width: 1400px;
        margin: 0 auto;
    }

    .nav {
        display: flex;
        align-self: center;
    }

    .nav li {
        list-style: none;
        display: inline-block;
        margin-left: 10px;
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <div className="logo">
                    <h3>Zaky Bilfagih</h3>
                </div>
                <ul className="nav">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </HeaderContainer>
    );
}
