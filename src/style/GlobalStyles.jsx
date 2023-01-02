import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        min-height: 100vh;
        overflow-x: hidden;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
`;
export default GlobalStyles;
