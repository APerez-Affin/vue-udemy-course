import pokemonApi from "@/api/pokemonApi";

describe("Pokemon Api ", () => {
  test("Axios should match with the pokemon api url ", () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
  });
});
