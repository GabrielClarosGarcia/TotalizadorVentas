import mostrarCantidad from "./cantidad.js";
import mostrarPrecio from "./precio.js";
import calcularPrecioNeto from "./precioNeto.js";
import obtenerImpuesto from "./impuesto.js";
import calcularPrecioTotalCA from "./precioTotalCA.js";
import calcularPrecioTotalAL from "./precioTotalAL.js";
import calcularPrecioTotalNV from "./precioTotalNV.js";
import calcularPrecioTotalUT from "./precioTotalUT.js";
import precioTotalDescuento from "./precioTotalDescuento.js";
import obtenerPorcentajeDescuento from "./porcentajeDescuento.js";

const cantidad = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number.parseInt(cantidad.value);
  const precioItem = Number.parseFloat(precio.value);
  const codigoEstado = estado.value;

  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);
  const porcentajeImpuesto = obtenerImpuesto(codigoEstado);
  const porcentajeDescuento = obtenerPorcentajeDescuento(precioNeto);

  let total = precioNeto;

  if (codigoEstado === "CA") total = calcularPrecioTotalCA(precioNeto);
  if (codigoEstado === "AL") total = calcularPrecioTotalAL(precioNeto);
  if (codigoEstado === "NV") total = calcularPrecioTotalNV(precioNeto);
  if (codigoEstado === "UT") total = calcularPrecioTotalUT(precioNeto);

  total = precioTotalDescuento(total);

  div.innerHTML =
    "<p>Precio neto (" +
    mostrarCantidad(cantidadItems) +
    "*$" +
    mostrarPrecio(precioItem) +
    "): $" +
    precioNeto +
    "</p>" +
    "<p>Descuento aplicado: " +
    porcentajeDescuento +
    "%</p>" +
    "<p>Impuesto para " +
    codigoEstado +
    " (" +
    porcentajeImpuesto +
    "%)</p>" +
    "<p>Precio total: $" +
    total +
    "</p>";
});