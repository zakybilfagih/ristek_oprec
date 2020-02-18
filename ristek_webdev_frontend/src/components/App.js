import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { Provider } from "react-redux";
import store from "../store";

import Comments from "./Comments";

const AppContainer = styled.div`
    h1 {
        color: blue;
    }
`;

function App() {
    return (
        <Provider store={store}>
            <AppContainer>
                <Comments />
            </AppContainer>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
