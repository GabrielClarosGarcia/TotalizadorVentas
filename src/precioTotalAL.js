function calcularPrecioTotalAL(precioNeto) {
  const impuesto = (precioNeto * 4) / 100;
  return precioNeto + impuesto;
}

export default calcularPrecioTotalAL;