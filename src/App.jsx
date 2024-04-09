import './App.css';
import { useFetchCharacter } from './hooks/useCustomHook';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/135';
  const urlRick = 'https://rickandmortyapi.com/api/character/359';

  const { character: characterPoke, loading: loadingPok } = useFetchCharacter(urlPokemon);
  const { character: characterRick, loading: loadingRick } = useFetchCharacter(urlRick);

  return (
    <>
      <h2>Personaje Pokemon</h2>
        {loadingPok ? (<p>Loading...</p>) : (
          <>
            <p>{characterPoke.name}</p>
            <img src={characterPoke.sprites.other.dream_world.front_default} />
        </>
        )}
    
      <h2>Personaje Rick and Morty</h2>
        {loadingRick ? (<p>Loading...</p>) : (
          <>
          <p>{characterRick.name}</p>
          <img src={characterRick.image} />
          </>
        )}
       
    </>
  );
}

export default App;
