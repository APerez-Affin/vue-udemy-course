import { shallowMount, mount } from "@vue/test-utils";
import { Counter } from "@/components/index";

/*
 * Shallowmount: Monta el componente de una forma más ligera y menos intrusiva.
 * Mount: Monta el componente de una forma más intrusiva accediendo a los hijos.
*/

describe("Counter Component", () => {
  test("Debe hacer match con el snapshot ", () => {
    const wrapper = shallowMount(Counter);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
