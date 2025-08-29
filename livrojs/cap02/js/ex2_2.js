// cria a referência ao formulário e aoa elementos h3 e h4

const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

// cria um "ouvinte" de evento, acionado quando o botão submit do form for clicado
frm.addEventListener("submit", (e) => {

const titulo = frm.inTitulo.value; // obtém o título digitado no form
const duracao = frm.inDuracao.value; // obtém conteúdo dos campos
const horas = Math.floor(duracao / 60); // calcula a quantidade de horas
const minutos = duracao % 60; // calcula a quantidade de minutos

resp1.innerText = `${titulo}` // exibe o título do filme
resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)` // exibe a duração do filme

    e.preventDefault() // evitar o envio do form
})