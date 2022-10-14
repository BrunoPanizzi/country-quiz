import { useNavigate, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'

import { generateQuestionsTypes } from './figureStuffOut'

import { result } from './types'

import FlagQuestion from './FlagQuestion'
import CapitalQuestion from './CapitalQuestion'

export default function Quiz() {
  const seed = Number(useParams().seed)
  const navigate = useNavigate()

  // an array of numbers, 0 means wrong guess and 1 means correct
  const [results, setResults] = useState<result>([])

  const questions = useMemo(() => generateQuestionsTypes(seed), [seed])

  const handleSuccess = () => setResults((p) => [...p, 1])

  const handleFail = () => {
    console.log('hahahahaha rip bozo')
    setResults((p) => [...p, 0])
  }

  if (results.length === 4) {
    navigate('/results', { state: results })
  }
  return (
    <div>
      {questions[results.length] === 'capital' ? (
        <CapitalQuestion
          seed={seed}
          index={results.length}
          onSuccess={handleSuccess}
          onFail={handleFail}
        />
      ) : (
        <FlagQuestion
          seed={seed}
          index={results.length}
          onSuccess={handleSuccess}
          onFail={handleFail}
        />
      )}
    </div>
  )
}
