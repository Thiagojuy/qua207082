const original = document.querySelector(".produto")
const produtos = document.querySelector("#produtos")

produtos.innerHTML = ""
for (const p of lsProduto) {

    const clone = original.cloneNode(true)
    clone.querySelector(".nome").innerText = p.nome
    clone.querySelector(".descricao").innerText = p.descricao
    clone.querySelector("img").src = p.img
    clone.querySelector(".valor").innerText = `R$ ${p.valor.toFixed(2)}`
    produtos.appendChild(clone)


}

document.querySelectorAll(".produto").forEach((p, i) => {

    p.addEventListener("click", () => {
        p.classList.toggle("marcado")
        if (lsProduto[i].marcado == undefined) {
            lsProduto[i].marcado = 1
        }
        else {
            delete lsProduto[i].marcado

        }

        atualizarQt()
    }
    )
})

function atualizarQt() {
    const qt = lsProduto.filter(p => p.marcado == 1)
    document.querySelector("#qt").innerText = qt.length > 0 ? qt.length : ""
}

document.querySelector("#btVela").addEventListener("click", carrinho)

function carrinho() {
    document.querySelector("#qt").innerText
    if (qt == "") {

        alert("Necessário selecionar 1 item.")
        return
    }

}



