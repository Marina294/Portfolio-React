import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --bg: #F9F9F9;
    --gray-1: #5D534A;
    --additional: #A693EF;
    --white: #ffffff;
    --black: #000000;
  }
  html{
    font-size: 11px;
    font-family: 'Urbanist';
    background-color: var(--bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
// Smooth Scroll  
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background-color: var(--deep-dark);
      .scrollbar-thumb-y {
        background-color: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
