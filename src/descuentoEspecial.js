function obtenerDescuentoEspecial(cliente, precioNeto, categoria) {

  if (cliente === "recurrente" && precioNeto > 3000 && categoria === "alimentos") {
    return 100;
  }

  if (cliente === "especial" && precioNeto > 7000 && categoria === "electronicos") {
    return 200;
  }

  return 0;
}

export default obtenerDescuentoEspecial;