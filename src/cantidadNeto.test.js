import calcularPrecioNeto from "./precioNeto.js";

describe("Precio neto", () => {
  it("deberia calcular cantidad por precio", () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });
});