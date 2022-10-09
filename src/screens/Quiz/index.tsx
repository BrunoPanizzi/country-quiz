import { useParams } from 'react-router-dom'

import { generateQuestionsTypes, makeCapitalQuestion } from './figureStuffOut'

export default function Quiz() {
  const seed = Number(useParams().seed)

  console.log(makeCapitalQuestion(seed, 2))

  return (
    <div>
      <h1>quiz with seed {seed}</h1>
    </div>
  )
}
