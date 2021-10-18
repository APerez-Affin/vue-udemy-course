import { shallowMount, mount } from "@vue/test-utils";
import { PokemonPicture } from "@/components/index";

describe("PokemonPicture Component", () => {
  test("Should match with the snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show the dark picture and the pokemon 100 ", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });

    const [img1, img2] = wrapper.findAll("img");

    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);

    expect(img1.classes("hidden-pokemon")).toBeTruthy();
  });

  test("Should show the picture if showPokemon:true ", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 100,
        showPokemon: true,
      },
    });

    const img1 = wrapper.find("img");

    expect(img1.exists()).toBeTruthy();

    expect(img1.classes("hidden-pokemon")).toBeFalsy();

    expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
  });
});
