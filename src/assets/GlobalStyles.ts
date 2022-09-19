import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
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
