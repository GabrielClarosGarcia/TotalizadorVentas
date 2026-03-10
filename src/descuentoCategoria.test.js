import obtenerDescuentoCategoria from "./descuentoCategoria.js";

describe("Descuento por categoria", () => {

  it("alimentos debe tener 2%", () => {
    expect(obtenerDescuentoCategoria("alimentos")).toEqual(2);
  });

  it("escritorio debe tener 1.5%", () => {
    expect(obtenerDescuentoCategoria("escritorio")).toEqual(1.5);
  });

  it("electronicos debe tener 1%", () => {
    expect(obtenerDescuentoCategoria("electronicos")).toEqual(1);
  });

  it("muebles no tiene descuento adicional", () => {
    expect(obtenerDescuentoCategoria("muebles")).toEqual(0);
  });

});