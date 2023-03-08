import axios from "axios";

export const getPokemonData = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    }, 2000)
  );

export const invalidGetPokemonData = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemooo/")
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
    }, 2000)
  );
