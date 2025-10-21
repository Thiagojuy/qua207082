const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
let lsItem = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const paciente = frm.inPaciente.value
    const status = frm.inStatus.value   

    const local = frm.inLocal.value   
    const previsto = frm.inInicio.value   
    const inicio = frm.inInicio.value   
    const fim = frm.inFim.value   
    const saida = frm.inSaida.value   

    const index = frm.inIndex.value   

    index == "" ? lsItem.push({paciente,status,local,previsto,inicio,fim,saida}) : lsItem[index] = {paciente,status,local,previsto,inicio,fim,saida}
   
    atualizarTabela()    
})

function prepararEdicao(index){
    frm.inPaciente.value = lsItem[index].item
    frm.inStatus.value = lsItem[index].status

    frm.inLocal.value = lsItem[index].local
    frm.inInicio.value = lsItem[index].previsto   
    frm.inInicio.value = lsItem[index].inicio   
    frm.inFim.value = lsItem[index].fimc   
    frm.inSaida.value = lsItem[index].saida   

    frm.inIndex.value = index
    frm.btApagar.disabled = false
}

frm.btApagar.addEventListener("click", () =>{
    const index = frm.inIndex.value

    if(index == ""){
        alert("Necessário selecionar 1 item.")
        return
    }

    if(confirm("Deseja realmente apagar esse item?") == false){
        return
    }

    lsItem.splice(index,1)
    atualizarTabela()        
})

const coresStatus = {
  "Pré-Operatório": "#fbd972",
  "Em recuperação": "#89e89f",
  "Transferido": "#b8daff"
};

function atualizarTabela() {
    limpar()
    localStorage.setItem("lsItem", JSON.stringify(lsItem))
    
        tbody.innerHTML = ""

        let cont = 0

    for (i of lsItem) {

        const cor = coresStatus[i.status];

        tbody.innerHTML += `<tr onclick="prepararEdicao(${cont})">
        <td>${i.paciente}</td>
          <td style="background-color:${cor}">
            ${i.status} (${i.local})
          </td>
          <td>${i.previsto}</td>
          <td>${i.inicio}</td>
          <td>${i.fim}</td>
          <td>${i.saida}</td>       
        </tr>`

        cont++
    }
}

function limpar(){
    frm.inPaciente.value = ""  
    frm.inStatus.value = ""
    frm.inLocal.value = ""
    frm.inPrevisto.value = "" 
    frm.inInicio.value = ""
    frm.inFim.value = ""  
    frm.inSaida.value = ""
    frm.inIndex.value = ""
    frm.inPaciente.focus()
    frm.btApagar.disabled = true
}

if(localStorage.getItem("lsItem") != null){
    lsItem = JSON.parse(localStorage.getItem("lsItem"))
    atualizarTabela()
}