import obtenerDescuentoEspecial from "./descuentoEspecial.js";

describe("Descuento especial", () => {

  it("cliente recurrente con alimentos y neto mayor a 3000 tiene descuento 100", () => {
    expect(obtenerDescuentoEspecial("recurrente", 4000, "alimentos")).toEqual(100);
  });

  it("cliente especial con electronicos y neto mayor a 7000 tiene descuento 200", () => {
    expect(obtenerDescuentoEspecial("especial", 8000, "electronicos")).toEqual(200);
  });

  it("cliente normal no tiene descuento especial", () => {
    expect(obtenerDescuentoEspecial("normal", 9000, "electronicos")).toEqual(0);
  });

});