import React, { Fragment, useContext, useEffect } from 'react';
import { Store } from './Store';

const CharactersList = React.lazy<any>(()=> import('./CharactersList'));

function App(): JSX.Element {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    fetchCharacters();
  },[])

  const fetchCharacters = async (): Promise<void> => {
    const characters = await fetch("https://rickandmortyapi.com/api/character");
    return dispatch({
      type: 'FETCH_DATA',
      payload: (await characters.json()).results
    })
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite character!!!</p>
      </div>
      <React.Suspense fallback={<div style={{textAlign:'center'}}><div className="loader"><div></div><div></div><div></div></div></div>}>
        <CharactersList/>
      </React.Suspense>
    </Fragment>
  );
}

export default App;
