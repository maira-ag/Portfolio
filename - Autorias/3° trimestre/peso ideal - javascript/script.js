const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const masculino = frm.inMasculino.cheked
    const altura = Number(frm.inAltura.value)

    let peso   // declara a variável peso para ser usada fora do "if" na resposta
    if (masculino == true) {
        peso = 22 * Math.pow(altura, 2)
    }
    else {
        peso = 21 * Math.pow(altura, 2)
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

frm.addEventListener ("reset", () => {
    resp.innerText = "" // limpa o conteúdo do h3 que exibe a resposta
})

//operador ternário para substituir o "if"
// const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
//peso recebe masculino? se sim: 22   ----- se não: 21 