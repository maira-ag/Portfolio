function mudaCor() {
    let pag = document.querySelector("body")
    let txt = document.querySelector("#texto")

    pag.style.transition = "background-color 3s"
    pag.style.backgroundColor = "rgba(99,34,203,1)"
    txt.style.color = "rgba(255,255,255,1)"
}
/* function mudaCor() {
    let pag = document.querySelector("body")
    let txt = document.querySelector("#texto")

    if (pag.style.backgroundColor === "rgba(255,255,255,1)") {
        pag.style.transition = "background-color 1s"

        pag.style.backgroundColor = "rgba(99,34,203,1)"

        txt.style.color = "rgba(255,255,255,1)"
    }
    else {
        pag.style.transition = "background-color 1s"

        pag.style.backgroundColor = "rgba(255,255,255,1)"

        txt.style.color = "rgba(0,0,0,1)"
    }
} */