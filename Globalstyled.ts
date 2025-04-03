import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
html,
body,
#root{
  width: 100%;
  height: 100vh;
  background-color: #333;
  overflow: hidden;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
`
