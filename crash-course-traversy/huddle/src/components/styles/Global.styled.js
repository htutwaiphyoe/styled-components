import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        box-sizing: border-box;

        @media only screen and (max-width: ${({ theme }) => theme.width.xs}) {
            font-size: 50%;
        }
    }

    body{
        background-color: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 10%);
        font-family: 'Open Sans', sans-serif;
        font-size: 1.8rem;
        line-height: 1.5;
        font-weight: 400;
    }

    img{
        max-width: 100%;
    }

    button{
        outline: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
    }
    p{
        opacity: 0.6;
    }
    h1,h2{
      margin-bottom: 1rem;
    }

    ul{
        list-style: none;
    }
`;
