
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {

    box-sizing: border-box;
    font-family: -apple-system, "ProDisplay", BlinkMacSystemFont, Helvetica, Tahoma, Arial Black,Verdana, Montserrat, sans-serif;
    text-shadow: ${({ theme }) => theme.effect.textShadow};

    padding: 0;
    margin: 0;

    scrollbar-color: ${({ theme }) => theme.color.main.background} ${({ theme }) => theme.color.main.selection};
  }

  @supports (scrollbar-color: ${({ theme }) => theme.color.main.selection} ${({ theme }) => theme.color.main.selection}) {

    scrollbar-color: ${({ theme }) => theme.color.main.background} ${({ theme }) => theme.color.main.selection};
  }
  &::-webkit-scrollbar {

    width: 1vw;
    height: 0;

    @media (max-width: 999px) {

      width: 0vw;
    }
  }
  &::-webkit-scrollbar-track {

    background: ${({ theme }) => theme.color.main.selection};
  }
  &::-webkit-scrollbar-thumb {

    background: ${({ theme }) => theme.color.main.background};
    border-radius: 50%;
    border:solid .3vw ${({ theme }) => theme.color.main.selection};

    &:hover {

      border: solid .1vw ${({ theme }) => theme.color.main.selection};
    }
  }

  &::selection {

    background: ${({ theme }) => theme.color.main.selection};
    color: ${({ theme }) => theme.color.main.textColor};
  }

  :root {

    background:  ${({ theme }) => theme.color.main.background};
    font-size: 62.5%;

    overflow: hidden;
  }

  #root {

    max-height: 100vh;
		overflow-y: auto;
  }

  body {

    color: ${({ theme }) => theme.color.main.textColor};
    font-size: 1.6rem;
    font-weight: 500;

    height: 100vh;
  }

  a,
  button {

    border: none;
    text-decoration:none;
    cursor: pointer;

    @media (max-width: 595px) {

      cursor: default;
    }
  }

  li {

    list-style: none;
  }

  img,
  .no-select {

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  img,
  .no-events {

    pointer-events: none;
  }

  &:focus{

    outline: solid .25rem ${({ theme }) => theme.color.cold.blue} ;
  }

  button#main-content {

    outline: none;

    &:focus, &:active, &:hover {

    outline: none !important;
  }
  }

  input,
  textarea {

    &::selection {

      background: ${({ theme }) => theme.color.main.comment};
      color: ${({ theme }) => theme.color.main.textColor};
    }
  }
`;

export default GlobalStyle;