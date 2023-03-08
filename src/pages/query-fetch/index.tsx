import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPokemonData } from "../service/fetch";

const QueryFetch = () => {
  const { data, status, error, refetch } = useQuery({
    queryKey: ["getAllPokemon"],
    queryFn: getPokemonData,
    enabled: false,
  });
  return (
    <>
      <h1 className="mb-40">Query Fetch</h1>
      <div className="flex gap-40">
        <div className="flex flex-col gap-8 items-center">
          <h1>Try and fetch some pokemon data!</h1>
          <button className="w-40" onClick={() => refetch()}>Fetch</button>
					{status === "loading" ? "Loading..." : status === "error" ? <p>{error as any}</p> : (
						<p>{JSON.stringify(data, null, 2)}</p>
					)}
        </div>
        <div className="flex flex-col gap-8 items-center">
          <h1>Or fetch specific pokemon</h1>
          <input type="text" className="border border-gray-300 rounded-lg py-2 px-4" />
          <button>Fetch</button>
        </div>
      </div>
    </>
  );
};

export default QueryFetch;
