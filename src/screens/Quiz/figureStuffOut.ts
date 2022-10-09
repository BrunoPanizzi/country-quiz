import countries from '../../mocks/countries'

type questionTypes = 'capital' | 'flag'

function stripSeed(seed: number) {
  return String(seed)
    .split('')
    .map((i) => Number(i))
}

export function generateQuestionsTypes(seed: number) {
  let strip = stripSeed(seed)
  let types: questionTypes[] = []

  strip.slice(-4).map((i) => {
    const type: questionTypes = i % 2 ? 'capital' : 'flag'
    types.push(type)
  })
  return types
}

export function makeCapitalQuestion(seed: number, index: number) {
  const newSeed = seed * (index + 1)

  const i = newSeed % (countries.length + 1)

  return countries[i].capital
}
