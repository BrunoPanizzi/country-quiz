import { makeCapitalQuestion } from './figureStuffOut'

import { questionProps } from './types'

import Alternatives from '../../components/Alternatives'

export default function ({ seed, index, onSuccess, onFail }: questionProps) {
  const question = makeCapitalQuestion(seed, index)

  return (
    <>
      <h2>{question.capital} is the capital of which country?</h2>
      <Alternatives
        key={index}
        alternatives={question.options}
        onSuccess={onSuccess}
        onFail={onFail}
      />
    </>
  )
}
