import { useState } from 'react'
import styled, { css } from 'styled-components'
import Button from '../../components/Button'
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
  const [selected, setSelected] = useState('')

  const correct = alternatives.find((a) => a.isCorrect)!

  return (
    <div>
      {alternatives.map((option, i) => (
        <Alternative
          onClick={() => setSelected(option.country)}
          selected={selected === option.country}
          key={option.country}
        >
          <span>{letters[i]}</span>
          {option.country}
        </Alternative>
      ))}
      {selected && (
        <Button onClick={selected === correct.country ? onSuccess : onFail}>
          Submit
        </Button>
      )}
    </div>
  )
}

const Alternative = styled.button<{
  selected: boolean
}>`
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
    opacity: 0.75;
  }

  span {
    font-size: 1.25rem;
    margin-inline-end: 2rem;
  }

  ${({ selected }) =>
    selected &&
    css`
      background: #f9a826;
      border-color: #f9a826;
      color: white;
      opacity: 1 !important;
    `}
`
