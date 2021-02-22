import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #root{
    width: 100%;
  }
`;
