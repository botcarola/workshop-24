const cajaRoja = document.querySelector("#rojo")
const cajaAzul = document.querySelector("#azul")
const frase = document.querySelector("h1")
const main = document.querySelector("main")
const cajaVerde = document.querySelector("#verde")
const cajaCyan = document.querySelector("#cyan")
const cajaVioleta = document.querySelector("#violeta")
const cajaRosa = document.querySelector("#rosa")


function cambiarColores (elemento, color) {

    elemento.onmouseover = () => {
        frase.style.color = color
        main.style.backgroundColor = color
    }    
}

cambiarColores(cajaRoja, "red")
cambiarColores(cajaAzul, "blue")
cambiarColores(cajaVerde, "green")
cambiarColores(cajaCyan, "cyan")
cambiarColores(cajaVioleta, "blueviolet")
cambiarColores(cajaRosa, "palevioletred")

main.onclick = () => {
    frase.style.color = "black"
    main.style.backgroundColor = "black"
}
