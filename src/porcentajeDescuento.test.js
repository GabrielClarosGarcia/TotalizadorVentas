import obtenerPorcentajeDescuento from "./porcentajeDescuento.js";

describe("Porcentaje de descuento", () => {

  it("deberia devolver 3% cuando el precio es 1000", () => {
    expect(obtenerPorcentajeDescuento(1000)).toEqual(3);
  });

  it("deberia devolver 5% cuando el precio es 3000", () => {
    expect(obtenerPorcentajeDescuento(3000)).toEqual(5);
  });

  it("deberia devolver 7% cuando el precio es 1000", () => {
    expect(obtenerPorcentajeDescuento(7000)).toEqual(7);
  });

  it("deberia devolver 10% cuando el precio es 3000", () => {
    expect(obtenerPorcentajeDescuento(10000)).toEqual(10);
  });

  it("deberia devolver 15% cuando el precio es 3000", () => {
    expect(obtenerPorcentajeDescuento(30000)).toEqual(15);
  });

});