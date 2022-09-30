import styled from 'styled-components'

import { makeFlagQuestion } from './figureStuffOut'

import { questionProps } from './types'

import Alternatives from './Alternatives'

export default function ({ seed, index, onSuccess, onFail }: questionProps) {
  const question = makeFlagQuestion(seed, index)

  return (
    <>
      <Image src={question.flag} />
      <h2>This is the flag of which country?</h2>
      <Alternatives
        alternatives={question.options}
        onSuccess={onSuccess}
        onFail={onFail}
      />
      <button onClick={onSuccess}>click</button>
    </>
  )
}

const Image = styled.img`
  width: 150px;
  border-radius: 1rem;
  box-shadow: 0 6px 1.75rem rgba(0 0 0 / 0.2);
`
