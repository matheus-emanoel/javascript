var btn = document.getElementById("botao")
var resultado = document.querySelector("#resultado")

function pegaNumero() {
    var num = Number(document.querySelector("#tabuada").value)
    return num
}

function geraTabuada(numTabuada) {
    resultado.innerHTML = "Resultado"
    for(var i = 1; i <= 10; i++) {
        mostrarTabuada(`${numTabuada} x ${i} = ${i * numTabuada}`)
    }
}

function mostrarTabuada(mensagem) {
    var texto = document.createElement("p")
    texto.innerHTML = mensagem
    resultado.insertAdjacentElement("beforeend", texto)
}

btn.onclick = function() {
    geraTabuada(pegaNumero())
}


