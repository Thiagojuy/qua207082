const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const clubes = []

frm.addEventListener("submit", (e) => {
e.preventDefault()

const nome = frm.inClube.value

clube.push(nome)

frm.btListar.dispatchEvent(new Event("click"))

frm.inClube.value = ""
frm.inClube.focus()
})

frm.btListar.addEventListener("click, () => "{
if (clubes.length == 0) {
alert("Não há clubes na lista...")
inClube.focus()
return
}

let lista = ""

for(const clube of clubes) {

    lista += clube + "\n"
}

resp.innerText = lista

})

frm.btMontar.addEventListener("click, () =>"{
alert("Deve haver número par de clubes")
inClube.focus()
return
}