import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './assets/GlobalStyles'

import Navigation from './screens/Navigation'

const Content = styled.main`
  width: min(85%, 550px);
  margin-bottom: 5rem;

  & > h1 {
    color: white;
    line-height: 90%;
    font-size: 2.5rem;
  }

  & > div {
    background-color: white;
    box-shadow: 0 4px 32px rgb(29 50 73 / 0.25);
    padding: 1.5rem;
    border-radius: 1rem;
  }
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Content>
        <h1>Country Quiz</h1>
        <Navigation />
      </Content>
    </BrowserRouter>
  )
}

export default App
