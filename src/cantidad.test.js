import mostrarCantidad from "./cantidad.js";

describe("Cantidad de items", () => {
  it("deberia mostrar la cantidad ingresada", () => {
    expect(mostrarCantidad(20)).toEqual(20);
  });
});