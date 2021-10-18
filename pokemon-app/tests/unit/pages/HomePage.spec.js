import { shallowMount, mount } from "@vue/test-utils";
import HomePage from "@/pages/HomePage";

import { pokemons } from "../mocks/pokemons.mock";

describe("HomePage Component", () => {
  let wrapper;
  let mixPokemonArraySpy;
  // Carga el componente antes de ejecutar los test con el mock de pokemons
  beforeEach(() => {
    mixPokemonArraySpy = jest.spyOn(HomePage.methods, "mixPokemonArray");
    wrapper = shallowMount(HomePage);
  });

  test("Should match with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should call mixPokemonArray", () => {
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test("Should match with the snapshot when the pokemons are loaded", () => {
    const wrapper = shallowMount(HomePage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show the components PokemonPicture && PokemonOptions", () => {
    const wrapper = shallowMount(HomePage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });

    const picture = wrapper.find("pokemon-picture-stub");
    const options = wrapper.find("pokemon-options-stub");

    expect(picture.exists()).toBeTruthy();
    expect(options.exists()).toBeTruthy();

    expect(picture.attributes("pokemonid")).toBe("1");
    expect(options.attributes("pokemons")).toBeTruthy();
  });

  test("Test with checkAnswer", async () => {
    const wrapper = shallowMount(HomePage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
        };
      },
    });

    await wrapper.vm.checkAnswer(10);

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBe(true);
    expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`);
  });
});
