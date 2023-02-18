import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
  }
html,
body {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
  background-color: ${props => props.theme.mode.main};
  color: ${props => props.theme.mode.contrastText};
  transition: all .2s ease-out;
}
main{
  margin: 13vh 10rem;
}
`;
export default GlobalStyle;
