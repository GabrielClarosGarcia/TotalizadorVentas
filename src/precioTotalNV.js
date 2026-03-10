function calcularPrecioTotalNV(precioNeto) {
  const impuesto = (precioNeto * 8) / 100;
  return precioNeto + impuesto;
}

export default calcularPrecioTotalNV;