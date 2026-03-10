import calcularPrecioTotalNV from "./precioTotalNV.js";

describe("Precio total con impuesto para NV", () => {

  it("deberia calcular total con impuesto 8% para NV", () => {
    expect(calcularPrecioTotalNV(60)).toEqual(64.8);
  });

});