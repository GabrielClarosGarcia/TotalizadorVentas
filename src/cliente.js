function obtenerDescuentoEnvio(cliente) {

  if (cliente === "recurrente") return 0.5;
  if (cliente === "antiguo") return 1;
  if (cliente === "especial") return 1.5;

  return 0;
}

export default obtenerDescuentoEnvio;