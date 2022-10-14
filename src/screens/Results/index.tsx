import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { result } from '../Quiz/types'

import Button from '../../components/Button'

export default function Results() {
  const results: result = useLocation().state

  const nOfCorrects = results.reduce((sum, current) => sum + current, 0)

  console.log(nOfCorrects)
  return (
    <Container>
      <h2>Results</h2>
      <span>
        You got <Strong>{nOfCorrects}</Strong> awnsers correct
      </span>
      <Button to="/">Play again!</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    color: var(--blue);
    margin: 0;
    margin-block-end: 1rem;
  }

  span {
    margin-block-end: 2rem;
  }
`

const Strong = styled.strong`
  font-size: 1.25rem;
  color: var(--green);
`
