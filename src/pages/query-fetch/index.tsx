import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPokemonData, getSpecificPokemon } from "../service/fetch";

const QueryFetch = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, status, error, refetch, isFetching } = useQuery({
    queryKey: ["getAllPokemon"],
    queryFn: getPokemonData,
    enabled: false,
    retry: 2,
  });

  const {
    data: specificPokemonData,
    status: getSpecificPokemonStatus,
    error: getSpecificPokemonError,
    refetch: refetchSpecificPokemon,
    isFetching: isFetchingSpecificPokemon,
  } = useQuery({
    queryKey: ["getSpecificPokemon", searchValue],
    queryFn: () => getSpecificPokemon(searchValue),
    enabled: false,
  });

  return (
    <>
      <h1 className="mb-40">Query Fetch</h1>
      <div className="flex gap-40">
        <div className="flex flex-col gap-8 items-center">
          <h1>Try and fetch some pokemon data!</h1>
          <button className="w-40" onClick={() => refetch()}>
            Fetch
          </button>
          {isFetching ? (
            "Loading..."
          ) : status === "error" ? (
            <p>{(error as Error).message}</p>
          ) : (
            <p>{data?.count}</p>
          )}
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h1>Or fetch specific pokemon</h1>
          <input type="text" className="border border-gray-300 rounded-lg py-2 px-4" onChange={(e) => setSearchValue(e.target.value)}/>
          <button onClick={() => refetchSpecificPokemon()}>Fetch</button>
					{isFetchingSpecificPokemon ? (
            "Loading..."
          ) : getSpecificPokemonStatus === "error" ? (
            <p>{(getSpecificPokemonError as Error).message}</p>
          ) : (
            <p>{specificPokemonData?.name}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default QueryFetch;
