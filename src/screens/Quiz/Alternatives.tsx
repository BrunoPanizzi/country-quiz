import styled from 'styled-components'
import { option } from './types'

interface props {
  alternatives: option[]
  onSuccess: () => void
  onFail: () => void
}

const letters = ['A', 'B', 'C', 'D']
export default function Alternatives({
  alternatives,
  onSuccess,
  onFail,
}: props) {
  return (
    <div>
      {alternatives.map((option, i) => (
        <Alternative
          onClick={option.isCorrect ? onSuccess : onFail}
          letter={letters[i]}
          key={option.country}
        >
          {option.country}
        </Alternative>
      ))}
    </div>
  )
}

const Alternative = (p: {
  onClick: () => void
  children: string
  letter: string
}) => (
  <AlternativeContainer onClick={p.onClick}>
    <span>{p.letter}</span>
    {p.children}
  </AlternativeContainer>
)

const AlternativeContainer = styled.button`
  outline: none;
  display: block;
  width: 100%;
  background: transparent;
  border: 3px solid #1d3249;
  margin-block: 1.25rem;
  padding: 1rem;
  border-radius: 1rem;
  color: #1d3249;
  font-family: 'Roboto Slab', serif;
  font-size: 1.125rem;
  font-weight: 600;
  text-align: start;
  box-shadow: 0 2px 6px rgba(0 0 0 / 0.15);
  transition: 0.2s;

  &:hover {
    background: #f9a826;
    border-color: #f9a826;
    color: white;
  }

  span {
    font-size: 1.25rem;
    margin-inline-end: 2rem;
  }
`
