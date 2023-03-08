import axios, { AxiosError } from "axios";

export const getPokemonData = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => resolve(res.data))
        .catch((err) => reject(err as AxiosError));
    }, 1000)
  );

export const invalidGetPokemonData = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemooo/")
        .then((res) => resolve(res.data))
        .catch((err) => reject(err as AxiosError));
    }, 1000)
  );

export const getSpecificPokemon = (pokemonName: string) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    }, 1000)
  );
