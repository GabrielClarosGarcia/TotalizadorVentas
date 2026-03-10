import calcularPrecioTotalAL from "./precioTotalAL.js";

describe("Precio total con impuesto para AL", () => {

  it("deberia calcular total con impuesto 4% para AL", () => {
    expect(calcularPrecioTotalAL(60)).toEqual(62.4);
  });

});