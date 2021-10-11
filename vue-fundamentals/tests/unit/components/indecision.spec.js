import { shallowMount, mount } from "@vue/test-utils";
import { Indecision } from "@/components/index";

describe("Indecision Component", () => {
  let wrapper;
  let clgSpy;

  /* Debemos definir un mock global, ya que fetch lo requiere */
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  // Carga el componente antes de ejecutar los test
  beforeEach(() => {
    wrapper = shallowMount(Indecision);

    /* Creamos un espia */
    clgSpy = jest.spyOn(console, "log");

    /* Limpiamos las trazas de los mocks */
    jest.clearAllMocks();
  });

  test("Should math with the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Nothing should be sought until the question is asked", async () => {
    /* Seleccionamos la función getAnswer */
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");

    await input.setValue("Hola mundo");

    /* Esperamos que se llame 1 vez al console log */
    expect(clgSpy).toHaveBeenCalledTimes(1);
    expect(getAnswerSpy).toHaveBeenCalledTimes(0);
  });

  test("Should do the getAnswer when the question has '?' at the end", async () => {
    /* Seleccionamos la función getAnswer */
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");

    const input = wrapper.find("input");

    await input.setValue("Hola mundo?");

    /* Esperamos que se llame al getAnswer */
    expect(getAnswerSpy).toHaveBeenCalled();
  });

  test("GetAnswers test", async () => {
    await wrapper.vm.getAnswer();

    const img = wrapper.find("img");

    /* Verificamos los valores finales */
    expect(img.exists()).toBeTruthy();
    expect(wrapper.vm.image).toBe("https://yesno.wtf/assets/yes/2.gif");
    expect(wrapper.vm.answer).toBe("Si!");
  });

  // Debe fallar a proposito
  test("GetAnswers test - Fails", async () => {

    /* Recogemos el error del catch y asignamos un mensaje */
    fetch.mockImplementationOnce(() =>
      Promise.reject("Api is down")
    );
f
    await wrapper.vm.getAnswer();

    const img = wrapper.find("img");

    /* Verificamos los valores finales */
    expect(img.exists()).toBeFalsy();
    expect(wrapper.vm.image).toBe("No se pudo cargar del API");
  });
});
