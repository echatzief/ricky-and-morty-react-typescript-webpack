
export interface State {
  characters: Array<any>,
  favorites: Array<number>
}

export interface Redux {
  state: State,
  dispatch: any
}

export interface Action {
  type: string,
  payload: any
}

export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: any,
  location: any,
  image: string,
  episodes: string[],
  url: string,
  created: string,
}