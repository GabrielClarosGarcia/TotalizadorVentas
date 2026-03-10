import precioTotalDescuento from "./precioTotalDescuento.js";

describe("Precio total con descuento", () => {

  it("deberia aplicar descuento de 3% cuando el precio neto es 1000", () => {
    expect(precioTotalDescuento(1000)).toEqual(970);
  });

});