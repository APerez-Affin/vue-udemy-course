import getPokemonsOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/GetPokemonOptions";

describe("GetPokemonOptions helpers", () => {
  test("Should return a array of number", () => {
    const pokemons = getPokemons();
    expect(pokemons.length).toBe(650);
  });

  test("Should return a array of 4 elements with the pokemon names", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons).toStrictEqual([
      { name: "bulbasaur", id: 1 },
      { name: "ivysaur", id: 2 },
      { name: "venusaur", id: 3 },
      { name: "charmander", id: 4 },
    ]);
  });

  test("Should return a array mixed with the pokemon names", async () => {
    const pokemons = await getPokemonsOptions();
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
