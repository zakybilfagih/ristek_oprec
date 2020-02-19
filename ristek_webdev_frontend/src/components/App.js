import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Provider } from "react-redux";
import store from "../store";

import Comments from "./Comments";
import Header from "./Header";
import "normalize.css";

const AppContainer = styled.div`
    > .container {
        height: 100vh;
        max-width: 1400px;
        margin: 0 auto;
    }

    > .container > div {
        padding-top: 60px;
    }
`;

function App() {
    return (
        <Provider store={store}>
            <AppContainer>
                <Header />
                <div className="container">
                    <Comments />
                </div>
                <div className="container">
                    <Comments />
                </div>
                <div className="container">
                    <Comments />
                </div>
            </AppContainer>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
