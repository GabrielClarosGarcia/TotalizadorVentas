import mostrarPrecio from "./precio.js";

describe("Precio por item", () => {
  it("deberia devolver el precio ingresado", () => {
    expect(mostrarPrecio(3)).toEqual(3);
  });
});