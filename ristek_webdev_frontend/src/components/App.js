import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const AppContainer = styled.div`
    h1 {
        color: blue;
    }
`;

function App() {
    return (
        <AppContainer>
            <h1>Hellow</h1>
        </AppContainer>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
