import calcularPrecioTotalUT from "./precioTotalUT.js";

describe("Precio total con impuesto para UT", () => {

  it("deberia calcular total con impuesto 6.65% para UT", () => {
    expect(calcularPrecioTotalUT(60)).toEqual(63.99);
  });

});