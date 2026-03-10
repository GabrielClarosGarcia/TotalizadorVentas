function obtenerImpuestoCategoria(categoria) {

  if (categoria === "bebidas") return 7;
  if (categoria === "muebles") return 3;
  if (categoria === "electronicos") return 4;
  if (categoria === "vestimenta") return 2;

  return 0;
}

export default obtenerImpuestoCategoria;