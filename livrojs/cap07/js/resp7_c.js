const frm = document.querySelector("form") // obtém elementos da página
const resp1 = document.querySelector("#outDataLimite")
const resp2 = document.querySelector("#outComDesconto")

frm.addEventListener("submit", (e) => {          // "escuta" evento submit do form
  e.preventDefault()                             // evita envio do form

  