import calcularPrecioTotalCA from "./precioTotalCA.js";

describe("Precio total con impuesto para CA", () => {

  it("deberia calcular total con impuesto 8.25% para CA", () => {
    expect(calcularPrecioTotalCA(60)).toEqual(64.95);
  });

});