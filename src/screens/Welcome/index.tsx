import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import generateSeed from '../../utils/generateSeed'

import Button from '../../components/Button'

export default function Welcome() {
  const navigate = useNavigate()

  const seed = generateSeed()

  return (
    <Container>
      <h2>Welcome to the Country quiz!</h2>
      <p>Are you ready to test your knowledge about the world?</p>

      <Button to={`/quiz/${seed}`}>Start!</Button>
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
  }

  p {
    margin-block-end: 2rem;
  }
`
