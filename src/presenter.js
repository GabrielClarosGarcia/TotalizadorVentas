import mostrarCantidad from "./cantidad.js";
import mostrarPrecio from "./precio.js";

const cantidad = document.querySelector("#cantidad-items");
const precio = document.querySelector("#precio-item");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number.parseInt(cantidad.value);
  const precioItem = Number.parseInt(precio.value);

  div.innerHTML =
    "<p>Cantidad de items: " + mostrarCantidad(cantidadItems) + "</p>" +
    "<p>Precio por item: " + mostrarPrecio(precioItem) + "</p>";
});