import mostrarCantidad from "./cantidad.js";
import mostrarPrecio from "./precio.js";
import calcularPrecioNeto from "./precioNeto.js";

const cantidad = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio-item");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number.parseInt(cantidad.value);
  const precioItem = Number.parseInt(precio.value);

  const precioNeto = calcularPrecioNeto(cantidadItems, precioItem);

  div.innerHTML =
    //"<p>Cantidad de items: " + mostrarCantidad(cantidadItems) + "</p>" +
    //"<p>Precio por item: " + mostrarPrecio(precioItem) + "</p>" +
    "<p>Precio neto (" + mostrarCantidad(cantidadItems)+"*$"+ mostrarPrecio(precioItem)+"): $"+ precioNeto + "</p>";
});