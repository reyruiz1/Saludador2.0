import saludador from "./saludador";

const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const saludo = "Hola, ¡Bienvenid@!";
  div.innerHTML = "<p>" + saludo + "</p>";
});
