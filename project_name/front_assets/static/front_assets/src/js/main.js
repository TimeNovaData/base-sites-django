// PAGES
const pageHome = document.querySelector(".body-home");

// SCRIPT SENHA LOGIN
import mostrarSenha from "./mostrarSenha.js"
import showFormErrors from "./showFormErrors.js";

mostrarSenha()
showFormErrors()

// SECTIONS
import salebrandPortfolio from "./salebrand/salebrandPortfolio.js";
import salebrandSobre from "./salebrand/salebrandSobre.js";
import salebrandClientes from "./salebrand/salebrandClientes.js";
import salebrandContato from "./salebrand/salebrandContato.js";

salebrandPortfolio();
salebrandSobre();
salebrandClientes();
salebrandContato();

// ★ Pages Scopo
if (pageHome) {
}

document.addEventListener("DOMContentLoaded", () =>
  document.body.classList.add("dcl")
);
