import { default as pokemonApi } from "@/api/pokemonApi";

// Creamos un array de 650 espacios
export const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));

  // Devolvemos cada index más 1
  return pokemonArr.map((_, index) => index + 1);
};

// Realiza la llamada a la api
export const getPokemonNames = async ([a, b, c, d] = []) => {
  // Esperamos todos los datos de cada peticion
  const [p1, p2, p3, p4] = await Promise.all([
    pokemonApi.get(`${a}`),
    pokemonApi.get(`${b}`),
    pokemonApi.get(`${c}`),
    pokemonApi.get(`${d}`),
  ]);

  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

// Realizamos una mezcla de todos los index aleatoriamente
const getPokemonsOptions = async () => {
  // Hacemos la mezcla aleatoria
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  // Seleccionamos solo 4 pokemons aleatorios
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));
  
  return pokemons;
};

export default getPokemonsOptions;