import obtenerCostoEnvio from "./envio.js";

describe("Costo de envio por peso volumetrico", () => {

  it("peso 5 debe costar 0", () => {
    expect(obtenerCostoEnvio(5)).toEqual(0);
  });

  it("peso 15 debe costar 3.5", () => {
    expect(obtenerCostoEnvio(15)).toEqual(3.5);
  });

  it("peso 30 debe costar 5", () => {
    expect(obtenerCostoEnvio(30)).toEqual(5);
  });

  it("peso 60 debe costar 6", () => {
    expect(obtenerCostoEnvio(60)).toEqual(6);
  });

  it("peso 90 debe costar 6.5", () => {
    expect(obtenerCostoEnvio(90)).toEqual(6.5);
  });

  it("peso 150 debe costar 8", () => {
    expect(obtenerCostoEnvio(150)).toEqual(8);
  });

  it("peso 250 debe costar 9", () => {
    expect(obtenerCostoEnvio(250)).toEqual(9);
  });

});