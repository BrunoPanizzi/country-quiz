import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import generateSeed from '../../utils/generateSeed'

import Button from '../../components/Button'

export default function Welcome() {
  const navigate = useNavigate()

  const seed = generateSeed()

  return (
    <Container>
      <h3>Welcome to the Country quiz!</h3>
      <p>Are you ready to test your knowledge about the world?</p>

      <Button to={`/quiz/${seed}`}>Start!</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    color: #1d3249;
    margin: 0;
  }

  p {
    margin-block-end: 2rem;
  }
`
