export type questionTypes = 'capital' | 'flag'

export interface option {
  country: string
  isCorrect: boolean
}

interface baseQuestion {
  options: option[]
}

export interface flagQuestion extends baseQuestion {
  flag: string
}

export interface capitalQuestion extends baseQuestion {
  capital: string
}

export interface questionProps {
  seed: number
  index: number
  onSuccess: () => void
  onFail: () => void
}

export type result = (0 | 1)[]
