import mostrarCantidad from "./cantidad.js";

const cantidad = document.querySelector("#cantidad-items");
const form = document.querySelector("#totalizar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadItems = Number.parseInt(cantidad.value);

  div.innerHTML = "<p>Cantidad de items: " + mostrarCantidad(cantidadItems) + "</p>";
});