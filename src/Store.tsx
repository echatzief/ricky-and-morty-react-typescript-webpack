import React, { useReducer } from "react";
import { State, Action, Redux } from './interfaces';

const initialState: State = {
  characters: [],
  favorites: []
};

export const Store = React.createContext<Redux>({state: initialState, dispatch: ()=>{}});


function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, characters: action.payload };
    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload ] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: [...state.favorites.filter((favorite:number)=> favorite != action.payload) ] };
    default:
      return state; 
  }
};

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{state,dispatch}}>{props.children}</Store.Provider>
}