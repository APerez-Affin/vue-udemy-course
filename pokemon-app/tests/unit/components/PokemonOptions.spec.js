import { shallowMount } from "@vue/test-utils";
import { PokemonOptions } from "@/components/index";

import { pokemons } from '@/mocks/pokemons.mock'

describe("PokemonOptions Component", () => {
  let wrapper;

  // Carga el componente antes de ejecutar los test con el mock de pokemons
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons
      },
    });
  });

  test("Should match with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should show 4 options ", () => {
    
    const liTags = wrapper.findAll('li');

    expect(liTags.length).toBe(4);

    expect(liTags[0].text()).toBe('bulbasaur')
    expect(liTags[1].text()).toBe('ivysaur')
    expect(liTags[2].text()).toBe('venusaur')
    expect(liTags[3].text()).toBe('charmander')

  });

  test("Should emit 'selected' with the data when onclick", () => {
    const [li1 ,li2, li3, li4] = wrapper.findAll('li');

    li1.trigger('click');
    li2.trigger('click');
    li3.trigger('click');
    li4.trigger('click');

    expect(wrapper.emitted('selectedPokemon').length).toBe(4);

  });
});
