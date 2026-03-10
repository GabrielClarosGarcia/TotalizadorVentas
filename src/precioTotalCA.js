function calcularPrecioTotalCA(precioNeto) {
  const impuesto = (precioNeto * 8.25) / 100;
  return precioNeto + impuesto;
}

export default calcularPrecioTotalCA;