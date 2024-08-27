import saludador from "./saludador";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const saludo = saludador(nombre);
  div.innerHTML = "<p>" + saludo + "</p>";
});
