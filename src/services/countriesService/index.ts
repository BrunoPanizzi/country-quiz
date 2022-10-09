import { Country } from './types'

const baseUrl = 'https://restcountries.com/v3.1/'

export const getAll = async () => {
  const response = await fetch(baseUrl + 'all')
  const json = await response.json()

  return json as Country[]
}
