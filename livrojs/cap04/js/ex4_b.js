const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const velocPermitida = Number(frm.velocPermitida.value)
    const VelocCondutor = Number(frm.velocCondutor.value)
    if(velocCondutor <= frm.velocPermitida.value){
        resp.innerText = `sem multa`
    if(velocCondutor <= frm.velocPermitida.value * 1.2){
        resp.innerText = `multa leve`
    } else {
        resp.innerText = `multa grave`
    }
}
}
}
})

