export type Translation = Record<string, { official: string; common: string }>

export interface Name {
  common: string
  official: string
  nativeName: Translation
}

export interface ISK {
  name: string
  symbol: string
}

export interface Currencies {
  ISK: ISK
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  isl: string
}

export interface Eng {
  f: string
  m: string
}

export interface Fra2 {
  f: string
  m: string
}

export interface Demonyms {
  eng: Eng
  fra: Fra2
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}

export interface Country {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translation
  latlng: number[]
  landlocked: boolean
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}
