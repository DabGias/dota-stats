import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Cinzel', serif;
        font-weight: 500;
    }

    #root {
        color: #EFEFEF;
        background-color: #121212;
        min-height: 100vh;
    }
`;

export default GlobalStyle;