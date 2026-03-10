import precioTotalDescuento from "./precioTotalDescuento.js";

describe("Precio total con descuento", () => {

  it("deberia aplicar descuento de 3% cuando el precio neto es 1000", () => {
    expect(precioTotalDescuento(1000)).toEqual(970);
  });

  it("deberia aplicar descuento de 5% cuando el precio neto es 3000", () => {
    expect(precioTotalDescuento(3000)).toEqual(2850);
  });

  it("deberia aplicar descuento de 7% cuando el precio neto es 7000", () => {
    expect(precioTotalDescuento(7000)).toEqual(6510);
  });

  it("deberia aplicar descuento de 10% cuando el precio neto es 10000", () => {
    expect(precioTotalDescuento(10000)).toEqual(9000);
  });

});