const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []
let filtro = ""//localStorage.getItem("filtro") == null ? "" : localStorage.getItem("filtro")

frm.addEventListener("submit", (e) => {
  e.preventDefault()
  const item = frm.inItem.value
  const status = frm.inStatus.value
  const index = frm.inIndex.value
  // incluir ou atualizar
  index == "" ? lsItem.push({ item, status }) : lsItem[index] = { item, status }
  atualizarTabela()
})

function prepararEdicao(index) {
  frm.inItem.value = lsItem[index].item
  frm.inStatus.value = lsItem[index].status
  frm.inIndex.value = index
  frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () => {
  const index = frm.inIndex.value
  if (index == "") {
    alert("Necessário selecionar 1 Item")
    return
  }
  if (confirm("Deseja realmente apagar eese item?") == false) {
    return
  }
  lsItem.splice(index, 1)
  atualizarTabela()
})

function atualizarTabela() {
  limpar()
  localStorage.setItem("lsItem", JSON.stringify(lsItem))
  tbody.innerHTML = ""
  let cont = 0
  for (i of lsItem) {
    if (true || filtro == "" || filtro.includes(i.status)) {
      tbody.innerHTML +=
        `<tr onclick="prepararEdicao(${cont})">
            <td>${i.item}</td>
            <td>${i.status}</td>
        </tr>`
      cont++
    }
  }

  function limpar() {
    frm.inItem.value = ""
    frm.inStatus.value = ""
    frm.inIndex.value = ""
    frm.btApagar.disabled = true
  }

  if (localStorage.getItem("lsItem") != null) {
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()

  }

  const lsFiltro = frm.querySelectorAll('input[type="checkbox"]')
  for (const bt of lsFiltro) {
    bt.addEventListener("click", filtrar)
    if (filtro.includes(bt.value)) {
      bt.checked = true
    }
  }
  function filtrar() {
    filtro = ""
    for (const bt of lsFiltro) {
      filtro += bt.checked ? bt.value + "," : ""
    }
    atualizarTabela()
    localStorage.getItem("filtro", filtro)

  }
}