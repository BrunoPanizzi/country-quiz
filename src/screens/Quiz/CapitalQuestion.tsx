import { makeCapitalQuestion } from './figureStuffOut'

import { questionProps } from './types'

import Alternatives from './Alternatives'

export default function ({ seed, index, onSuccess, onFail }: questionProps) {
  const question = makeCapitalQuestion(seed, index)

  return (
    <>
      <h2>{question.capital} is the capital of which country?</h2>
      <Alternatives
        alternatives={question.options}
        onSuccess={onSuccess}
        onFail={onFail}
      />
      <button onClick={onSuccess}>click</button>
    </>
  )
}
