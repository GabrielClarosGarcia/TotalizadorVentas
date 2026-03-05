import obtenerImpuesto from "./impuesto.js";

describe("Impuesto por estado", () => {

  it("deberia devolver 8.25 para CA", () => {
    expect(obtenerImpuesto("CA")).toEqual(8.25);
  });

  it("deberia devolver 8 para NV", () => {
    expect(obtenerImpuesto("NV")).toEqual(8);
  });

  it("deberia devolver 6.25 para TX", () => {
    expect(obtenerImpuesto("TX")).toEqual(6.25);
  });

  it("deberia devolver 4 para AL", () => {
    expect(obtenerImpuesto("AL")).toEqual(4);
  });

  it("deberia devolver 6.65 para UT", () => {
    expect(obtenerImpuesto("UT")).toEqual(6.65);
  });

});