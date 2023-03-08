import React, { useState } from "react";
import { getPokemonData, getSpecificPokemon, invalidGetPokemonData } from "../service/fetch";

const NormalFetch = () => {
  const [isLoadingGetAllPokemon, setIsLoadingGetAllPokemon] = useState(false);
  const [pokemonData, setPokemonData] = useState<any>(undefined);
  const [errorGetAllPokemon, setErrorGetAllPokemon] = useState<any>(undefined);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const [specificPokemonData, setSpecificPokemonData] = useState<any>(undefined);
  const [errorGetSpecificPokemon, setErrorGetSpecificPokemon] = useState<any>(undefined);
  const [isLoadingSpecificPokemon, setIsLoadingSpecificPokemon] = useState(false);

  const fetchAllPokemonHandler = async () => {
    setIsLoadingGetAllPokemon(true);
    try {
      const pokemonData = await getPokemonData();
      setErrorGetAllPokemon(false);
      setPokemonData(pokemonData);
    } catch (err) {
      setErrorGetAllPokemon(err);
    }
    setIsLoadingGetAllPokemon(false);
  };

  const invalidFetchHandler = async () => {
    setIsLoadingGetAllPokemon(true);
    try {
      const pokemonData = await invalidGetPokemonData();
      setErrorGetAllPokemon(false);
      setPokemonData(pokemonData);
    } catch (err) {
      console.log(err);
      setErrorGetAllPokemon(err);
    }
    setIsLoadingGetAllPokemon(false);
  };

  const fetchSpecificPokemon = async () => {
    setIsLoadingSpecificPokemon(true);
    try {
      const specificPokemon = await getSpecificPokemon(pokemonNameInput);
      setErrorGetSpecificPokemon(false);
      setSpecificPokemonData(specificPokemon);
    } catch (err) {
      setErrorGetSpecificPokemon(err);
    }
    setIsLoadingSpecificPokemon(false);
  };

  return (
    <>
      <h1 className="mb-40">Normal</h1>
      <div className="flex gap-40">
        <div className="flex flex-col gap-8 items-center flex-shrink">
          <h1>Try and fetch some pokemon data!</h1>
          <button className="w-40" onClick={fetchAllPokemonHandler}>
            Fetch
          </button>
          <button className="w-40" onClick={invalidFetchHandler}>
            Invalid Fetch
          </button>
          {isLoadingGetAllPokemon && <p>Loading...</p>}
          {errorGetAllPokemon ? (
            <p>{errorGetAllPokemon.message}</p>
          ) : (
            <p>{JSON.stringify(pokemonData, null, 2)}</p>
          )}
        </div>
        <div className="flex flex-col gap-8 items-center flex-shrink">
          <h1>Or fetch specific pokemon</h1>
          <input
            type="text"
            className="border border-gray-300 rounded-lg py-2 px-4"
            onChange={(e) => setPokemonNameInput(e.target.value)}
          />
          <button onClick={fetchSpecificPokemon}>Fetch</button>
          {isLoadingSpecificPokemon && <p>Loading...</p>}
          {errorGetSpecificPokemon ? (
            <p>{errorGetSpecificPokemon}</p>
          ) : (
            <p>{JSON.stringify(specificPokemonData, null, 2)}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NormalFetch;
