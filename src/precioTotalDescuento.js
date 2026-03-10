function precioTotalDescuento(precioNeto) {

  if (precioNeto >= 1000) {
    const descuento = (precioNeto * 3) / 100;
    return precioNeto - descuento;
  }

  return precioNeto;
}

export default precioTotalDescuento;