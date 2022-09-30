import { useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'

import { generateQuestionsTypes } from './figureStuffOut'

import FlagQuestion from './FlagQuestion'
import CapitalQuestion from './CapitalQuestion'

export default function Quiz() {
  const seed = Number(useParams().seed)

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const questions = useMemo(() => generateQuestionsTypes(seed), [seed])

  const handleSuccess = () => setCurrentQuestion((p) => p + 1)

  const handleFail = () => {
    console.log('hahahahaha rip bozo')
  }

  if (currentQuestion === 4) {
    return 'you win'
  }
  return (
    <div>
      {questions[currentQuestion] === 'capital' ? (
        <CapitalQuestion
          seed={seed}
          index={currentQuestion}
          key={currentQuestion}
          onSuccess={handleSuccess}
          onFail={handleFail}
        />
      ) : (
        <FlagQuestion
          seed={seed}
          index={currentQuestion}
          key={currentQuestion}
          onSuccess={handleSuccess}
          onFail={handleFail}
        />
      )}
    </div>
  )
}
