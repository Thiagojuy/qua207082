const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2

    resp1.innerText = `Média das notas ${media.toFixed(2)}`

    if(media >= 7){
        // mensagem de aprovado e na cor azul
        resp2.innerText = `Parabéns ${nome}! Aprovado(a)`
        resp2.style.color = 'blue'
    } else if(media >= 4){
        // mensagem de atenção e na cor verde
        resp2.innerText = `Atenção ${nome}! Em Exame`
        resp2.style.color = 'green'
    } else {
        // mensagem de reprovado e na cor vermelha
        resp2.innerText = `Ops ${nome}! Reprovado(a)`
        resp2.style.color = 'red'
    }
})