import obtenerImpuestoCategoria from "./impuestoCategoria.js";

describe("Impuesto por categoria", () => {

  it("bebidas debe tener 7%", () => {
    expect(obtenerImpuestoCategoria("bebidas")).toEqual(7);
  });

  it("muebles debe tener 3%", () => {
    expect(obtenerImpuestoCategoria("muebles")).toEqual(3);
  });

  it("electronicos debe tener 4%", () => {
    expect(obtenerImpuestoCategoria("electronicos")).toEqual(4);
  });

  it("vestimenta debe tener 2%", () => {
    expect(obtenerImpuestoCategoria("vestimenta")).toEqual(2);
  });

  it("alimentos no tiene impuesto adicional", () => {
    expect(obtenerImpuestoCategoria("alimentos")).toEqual(0);
  });

});