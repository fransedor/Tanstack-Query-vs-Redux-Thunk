import React, { useState } from "react";
import { getPokemonData } from "../service/fetch";

const NormalFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);

  const fetchAllPokemonHandler = async () => {
    setIsLoading(true);
    try {
      const pokemonData = await getPokemonData();
      setPokemonData(pokemonData);
    } catch (err) {
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
          <button className="w-40" onClick={fetchAllPokemonHandler}>Fetch</button>
					{isLoading && <p>Loading...</p>}
					<p>{JSON.stringify(pokemonData, null, 2)}</p>
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
