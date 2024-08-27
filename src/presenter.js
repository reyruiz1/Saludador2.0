import saludador from "./saludador";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const genero = document.querySelector("#genero").value;

  const saludo = saludador({ nombre, genero });
  div.innerHTML = "<p>" + saludo + "</p>";
});
