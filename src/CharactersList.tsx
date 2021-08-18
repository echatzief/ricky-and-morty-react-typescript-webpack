import { useContext } from 'react';
import { Store } from './Store';
import { Character } from './interfaces';

export default function CharactersList() {
  const { state, dispatch } = useContext(Store);
  const { characters, favorites } = state;
  
  const addToFavorites = (id: number) => {
    return dispatch({
      type: 'ADD_FAVORITE',
      payload: id
    })
  }

  const removeFromFavorites = (id: number) => {
    return dispatch({
      type: 'REMOVE_FAVORITE',
      payload: id
    })
  }

  return (
    <section className="grid-container">
      {characters && characters.map((character:Character, idx:number) => {
        return (
          <section
            key={`character-#${idx}`}
            className="grid-item"
            style={{ textAlign: 'center', background:  favorites.includes(character.id)?'#684551':'#402E2A', padding: '20px', margin: '10px' }}
          >
            <hr/>
            <div style={{marginTop:'10px', marginBottom:'10px'}}>
              {character.name}
            </div>
            <img src={character.image} height="250" style={{justifyContent: 'center'}} />
            <div style={{marginTop:'10px', marginBottom:'10px'}}>
              Status: {character.status}
            </div>
            <div style={{marginTop:'10px', marginBottom:'10px'}}>
              Species: {character.species}
            </div>
            <div style={{marginTop:'10px', marginBottom:'10px'}}>
              Gender: {character.gender}
            </div>
            <div style={{marginTop:'10px', marginBottom:'10px'}}>
              Location: {character.location.name}
            </div>
            <button
              style={{
                width: '100px',
                height:'30px',
                background: favorites.includes(character.id)?'#CEA0AE':'#9CD08F'
              }}
              onClick={() => favorites.includes(character.id) ? removeFromFavorites(character.id) : addToFavorites(character.id)}
            >
              {favorites.includes(character.id)?<div>&#45;</div>:<div>&#43;</div>}
            </button>
            <hr/>
          </section>
        )
      })}
    </section>
  )
}