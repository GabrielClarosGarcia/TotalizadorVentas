function obtenerDescuentoCategoria(categoria) {

  if (categoria === "alimentos") return 2;
  if (categoria === "escritorio") return 1.5;
  if (categoria === "electronicos") return 1;

  return 0;
}

export default obtenerDescuentoCategoria;