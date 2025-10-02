// função para adicionar um valor ao visor
function adicionar(valor) {
    document.querySelector("#visor").value += valor
}


//função para limpar o visor
function limpar() {
    document.querySelector("#visor").value = ""
}

// função para apagar o último caractere
function apagar() {
    const visor = document.querySelector("#visor")
    visor.value = visor.value.slice(0,-1)
}

// função para calcular o resultado
function calcular() {
const visor = document.querySelector("#visor")
try {
    //usar a function eval() para calcular o resultado
    visor.value = eval(visor.value)

} catch (error) {
visor.value = "erro"

    
}



}


