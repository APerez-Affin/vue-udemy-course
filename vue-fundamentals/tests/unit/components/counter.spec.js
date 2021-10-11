import { shallowMount, mount } from "@vue/test-utils";
import { Counter } from "@/components/index";

/*
 * Shallowmount: Monta el componente de una forma más ligera y menos intrusiva.
 * Mount: Monta el componente de una forma más intrusiva accediendo a los hijos.
 */

describe("Counter Component", () => {
  let wrapper;

  // Carga el componente antes de ejecutar los test
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test("Should match with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Should be greater than 10 ", () => {
    /* Espera que sea mayor que 10 */
    expect(20).toBeGreaterThan(10);
  });

  test("Should display the title Counter by default ", () => {
    /* Busca la etiqueta */
    const h = wrapper.find("h2");

    /* Verifica si existe la etiqueta */
    expect(h.exists()).toBeTruthy();
    /* Verifica si el valor por defecto es counter */
    expect(h.text()).toBe("Counter");
  });

  test("Should display the value 100 on the p", () => {
    /* Seleccionamos el testid */
    const value = wrapper.find('[data-testid="counter"]');

    /* Verificamos si el valor del p es 100 */
    expect(value.text()).toBe("100");
  });

  test("Should increase the counter value plus 1 ", async () => {
    const increase = wrapper.find('[data-testid="btn-increase"]');
    const value = wrapper.find('[data-testid="counter"]');

    /* Simula un click asincrono */
    await increase.trigger("click");
    expect(value.text()).toBe("101");
  });

  test("Should decrease the counter value less 1 ", async () => {
    const decrease = wrapper.find('[data-testid="btn-decrease"]');
    const value = wrapper.find('[data-testid="counter"]');

    /* Simula un click asincrono */
    await decrease.trigger("click");
    expect(value.text()).toBe("99");
  });

  test("Should assign a default value ", () => {
    /* Accedemos a las props */
    const { start } = wrapper.props();
    const value = wrapper.find('[data-testid="counter"]').text();

    expect(Number(value)).toBe(start);
  });

  test("Should show the prop title ", () => {
    /* Enviamos un texto de ejemplo a la prop */
    const wrapper = shallowMount(Counter, {
      props: {
        title: "Texto de ejemplo"
      }
    });

    const value = wrapper.find("h2").text();

    expect(value).toBe('Texto de ejemplo');
  });

});
