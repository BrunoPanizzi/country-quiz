import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root {
    --blue: #1d3249;
    --yellow: #f9a826;
    --red: #f54e42;
    --green: #47a855;
  }

  html, body, #root {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

  #root {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #6066D0;
  }
`
