describe("Example Component", () => {
  test("Debe ser mayor de 10 ", () => {
    // Arreglar
    let value = 20;

    // Estímulo
    value = value + 2;

    // Observar el resultado
    //* Espera que sea mayor que 10 */
    expect(value).toBeGreaterThan(10);
  });
});
