import { useState } from 'react'

import Button from '../Button'

import { option } from '../../screens/Quiz/types'

import { Alternative } from './styles'

interface props {
  alternatives: option[]
  onSuccess: () => void
  onFail: () => void
}

export type statusCodes = 'success' | 'fail' | null

const letters = ['A', 'B', 'C', 'D']

export default function Alternatives({
  alternatives,
  onSuccess,
  onFail,
}: props) {
  const [selected, _setSelected] = useState('')
  const [status, setStatus] = useState<statusCodes>(null)

  const setSelected = (newValue: string) => {
    if (!status) _setSelected(newValue)
  }

  const correct = alternatives.find((a) => a.isCorrect)!

  const handleSuccess = () => {
    setStatus('success')
    onSuccess()
  }

  const handleFail = () => {
    setStatus('fail')
  }

  return (
    <div>
      {alternatives.map((option, i) => (
        <Alternative
          onClick={() => setSelected(option.country)}
          status={status}
          selected={selected === option.country}
          key={option.country}
          isCorrect={option.isCorrect}
        >
          <span>{letters[i]}</span>
          {option.country}
        </Alternative>
      ))}
      {selected && !status ? (
        <Button
          onClick={selected === correct.country ? handleSuccess : handleFail}
        >
          Submit
        </Button>
      ) : null}
      {status === 'fail' && <Button onClick={onFail}>Next</Button>}
    </div>
  )
}
