import mostrarCantidad from "./cantidad.js";
import mostrarPrecio from "./precio.js";
import calcularPrecioNeto from "./precioNeto.js";
import obtenerImpuesto from "./impuesto.js";
import obtenerImpuestoCategoria from "./impuestoCategoria.js";
import obtenerDescuentoCategoria from "./descuentoCategoria.js";
import obtenerPorcentajeDescuento from "./porcentajeDescuento.js";
import obtenerCostoEnvio from "./envio.js";
import obtenerDescuentoEnvio from "./cliente.js";

const cantidad = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio-item");
const estado = document.querySelector("#estado");
const categoria = document.querySelector("#categoria");
const peso = document.querySelector("#peso");
const cliente = document.querySelector("#cliente");

const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number.parseInt(cantidad.value);
  const precioItem = Number.parseFloat(precio.value);
  const codigoEstado = estado.value;
  const categoriaProducto = categoria.value;
  const pesoVolumetrico = Number.parseFloat(peso.value);
  const tipoCliente = cliente.value;

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

  const porcentajeDescuentoEnvio = obtenerDescuentoEnvio(tipoCliente);
  const descuentoEnvio = (costoEnvioTotal * porcentajeDescuentoEnvio) / 100;

  const envioFinal = costoEnvioTotal - descuentoEnvio;

  const totalFinal = subtotal + envioFinal;

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

    "<p>Descuento envio cliente (" +
    porcentajeDescuentoEnvio +
    "%): $" +
    descuentoEnvio +
    "</p>" +

    "<p>Envio final: $" +
    envioFinal +
    "</p>" +

    "<p><b>Total final: $" +
    totalFinal +
    "</b></p>";
});