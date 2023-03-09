import axios, { AxiosError } from "axios";

export const getPokemonData = () =>
  new Promise<any>((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemoo/")
        .then((res) => resolve(res.data))
        .catch((err) => {
          if (err instanceof Error) {
            reject(err);
          }
          reject(new Error("error get pokemon data"));
        });
    }, 1000)
  );

export const invalidGetPokemonData = () =>
  new Promise<any>((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemooo/")
        .then((res) => resolve(res.data))
        .catch((err) => reject(err as AxiosError));
    }, 1000)
  );

export const getSpecificPokemon = (pokemonName: string) =>
  new Promise<any>((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    }, 1000)
  );
