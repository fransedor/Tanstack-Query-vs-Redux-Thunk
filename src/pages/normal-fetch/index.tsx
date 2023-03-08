import React, { useState } from "react";
import { getPokemonData, invalidGetPokemonData } from "../service/fetch";

const NormalFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);

  const fetchAllPokemonHandler = async () => {
    setIsLoading(true);
    try {
      const pokemonData = await getPokemonData();
			setError(false);
      setPokemonData(pokemonData);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  const invalidFetchHandler = async () => {
    setIsLoading(true);
    try {
      const pokemonData = await invalidGetPokemonData();
			setError(false);
      setPokemonData(pokemonData);
    } catch (err) {
      console.log(err);
      setError(err);
    }
    setIsLoading(false);
  };

  return (
    <>
      <h1 className="mb-40">Normal</h1>
      <div className="flex gap-40">
        <div className="flex flex-col gap-8 items-center">
          <h1>Try and fetch some pokemon data!</h1>
          <button className="w-40" onClick={fetchAllPokemonHandler}>
            Fetch
          </button>
          <button className="w-40" onClick={invalidFetchHandler}>
            Invalid Fetch
          </button>
          {isLoading && <p>Loading...</p>}
          {error ? <p>{error.message}</p> : <p>{JSON.stringify(pokemonData, null, 2)}</p>}
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h1>Or fetch specific pokemon</h1>
          <div className="flex gap-8">
            <input type="text" className="border border-gray-300 rounded-lg py-2 px-4" />
            <button>Fetch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NormalFetch;
