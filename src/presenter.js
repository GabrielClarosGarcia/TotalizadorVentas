import mostrarCantidad from "./cantidad.js";
import mostrarPrecio from "./precio.js";
import calcularPrecioNeto from "./precioNeto.js";
import obtenerImpuesto from "./impuesto.js";
import calcularPrecioTotalCA from "./precioTotalCA.js";
import calcularPrecioTotalAL from "./precioTotalAL.js";
import calcularPrecioTotalNV from "./precioTotalNV.js";
import calcularPrecioTotalUT from "./precioTotalUT.js";
import obtenerPorcentajeDescuento from "./porcentajeDescuento.js";
import obtenerImpuestoCategoria from "./impuestoCategoria.js";
import obtenerDescuentoCategoria from "./descuentoCategoria.js";
import obtenerCostoEnvio from "./envio.js";

const cantidad = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const peso = document.querySelector("#peso");

const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number.parseInt(cantidad.value);
  const precioItem = Number.parseFloat(precio.value);
  const codigoEstado = estado.value;
  const categoriaProducto = categoria.value;
  const pesoVolumetrico = Number.parseFloat(peso.value);

  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);

  const impuestoEstado = obtenerImpuesto(codigoEstado);
  const impuestoCategoria = obtenerImpuestoCategoria(categoriaProducto);
  const porcentajeImpuesto = impuestoEstado + impuestoCategoria;

  const descuentoBase = obtenerPorcentajeDescuento(precioNeto);
  const descuentoCategoria = obtenerDescuentoCategoria(categoriaProducto);
  const porcentajeDescuento = descuentoBase + descuentoCategoria;

  const montoImpuesto = (precioNeto * porcentajeImpuesto) / 100;
  const montoDescuento = (precioNeto * porcentajeDescuento) / 100;

  const subtotal = precioNeto + montoImpuesto - montoDescuento;

  const costoEnvioUnidad = obtenerCostoEnvio(pesoVolumetrico);
  const costoEnvioTotal = costoEnvioUnidad * cantidadItems;

  const totalFinal = subtotal + costoEnvioTotal;

  div.innerHTML =
    "<p>Precio neto (" +
    mostrarCantidad(cantidadItems) +
    "*$" +
    mostrarPrecio(precioItem) +
    "): $" +
    precioNeto +
    "</p>" +

    "<p>Impuesto total (" +
    porcentajeImpuesto +
    "%): $" +
    montoImpuesto +
    "</p>" +

    "<p>Descuento total (" +
    porcentajeDescuento +
    "%): $" +
    montoDescuento +
    "</p>" +

    "<p>Costo envio unidad: $" +
    costoEnvioUnidad +
    "</p>" +

    "<p>Costo envio total: $" +
    costoEnvioTotal +
    "</p>" +

    "<p><b>Total final: $" +
    totalFinal +
    "</b></p>";
});