import obtenerDescuentoEnvio from "./cliente.js";

describe("Descuento de envio por tipo de cliente", () => {

  it("cliente normal tiene 0%", () => {
    expect(obtenerDescuentoEnvio("normal")).toEqual(0);
  });

  it("cliente recurrente tiene 0.5%", () => {
    expect(obtenerDescuentoEnvio("recurrente")).toEqual(0.5);
  });

  it("cliente antiguo tiene 1%", () => {
    expect(obtenerDescuentoEnvio("antiguo")).toEqual(1);
  });

  it("cliente especial tiene 1.5%", () => {
    expect(obtenerDescuentoEnvio("especial")).toEqual(1.5);
  });

});