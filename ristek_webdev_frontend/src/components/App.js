import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Provider } from "react-redux";
import store from "../store";

import Header from "./Header";
import Overlay from "./Header/Overlay";
import Landing from "./Landing";
import About from "./About";

import "normalize.css";
import "./App.css";
import Comments from "./Contact/Comments";

const AppContainer = styled.div`
    font-size: 1.5rem;

    > section {
        height: 100vh;
    }
`;

function App() {
    const [menuOverlay, setMenuOverlay] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [scroll, setScroll] = useState(window.pageYOffset);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setScroll(currentScroll);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        width > 800 && setMenuOverlay(false);
    }, [width]);

    const vis = scroll > 500;

    return (
        <Provider store={store}>
            <AppContainer>
                <Header {...{ setMenuOverlay, scroll }} />
                <Landing />
                <About />
                {menuOverlay && <Overlay {...{ vis, setMenuOverlay }} />}
            </AppContainer>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
