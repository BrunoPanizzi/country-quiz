import countries from '../../mocks/countries'

import shuffleArray from '../../utils/shuffleArray'

import { capitalQuestion, flagQuestion, questionTypes } from './types'

function stripSeed(seed: number) {
  return String(seed)
    .split('')
    .map((i) => Number(i))
}

export function generateQuestionsTypes(seed: number): questionTypes[] {
  let strip = stripSeed(seed)
  return strip.slice(-4).map((i) => (i % 2 ? 'capital' : 'flag'))
}

export function makeCapitalQuestion(
  seed: number,
  index: number
): capitalQuestion {
  const mainSeed = seed * (index + 1)

  const i = mainSeed % countries.length
  const country = countries[i]

  let finalOptions = [{ country: country.name, isCorrect: true }]

  ;[seed * (23 + index), seed * (12 + index), seed * (34 + index)].forEach(
    (s) => {
      let c = countries[s % countries.length]
      finalOptions.push({
        country: c.name,
        isCorrect: false,
      })
    }
  )

  shuffleArray(finalOptions)

  return {
    capital: country.capital,
    options: finalOptions,
  }
}

export function makeFlagQuestion(seed: number, index: number): flagQuestion {
  const mainSeed = seed * (index + 1)

  const i = mainSeed % (countries.length + 1)
  const country = countries[i]

  let finalOptions = [{ country: country.name, isCorrect: true }]

  ;[seed * (23 + index), seed * (12 + index), seed * (43 + index)].forEach(
    (s) => {
      let c = countries[s % countries.length]
      finalOptions.push({
        country: c.name,
        isCorrect: false,
      })
    }
  )

  shuffleArray(finalOptions)

  return {
    flag: country.flag.png,
    options: finalOptions,
  }
}
