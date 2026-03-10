function calcularPrecioTotalUT(precioNeto) {
  const impuesto = (precioNeto * 6.65) / 100;
  return precioNeto + impuesto;
}

export default calcularPrecioTotalUT;