function precioTotalDescuento(precioNeto) {

  if (precioNeto >= 3000) {
    const descuento = (precioNeto * 5) / 100;
    return precioNeto - descuento;
  }

  if (precioNeto >= 1000) {
    const descuento = (precioNeto * 3) / 100;
    return precioNeto - descuento;
  }

  return precioNeto;
}

export default precioTotalDescuento;