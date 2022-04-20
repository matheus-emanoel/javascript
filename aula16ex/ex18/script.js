var adicionar = document.querySelector("#adicionar")
var finalizar = document.querySelector("#finalizar")
var txtAdicionar = document.querySelector("#numAdicionados")
var txtFilanizar = document.querySelector("#numFinalizados")
var listaNumeros = []

function mensagem(msn, referencia) {
    var texto = document.createElement("p")
    texto.innerHTML = msn
    referencia.insertAdjacentElement("beforeend", texto)
}

function numerosAdcionados() {
    var numero = parseInt(document.querySelector("#numero").value)

    if(listaNumeros.indexOf(numero) == -1 && numero > 0 && numero <= 100) {
        listaNumeros.push(numero)
        txtAdicionar.innerHTML = " "
        txtFilanizar.innerHTML = " "
        mensagem(listaNumeros, txtAdicionar)
    } else {
        alert("Erro")
    }

}

function calculos() {
    txtFilanizar.innerHTML = " "
    listaNumeros.sort()
    var maior = listaNumeros[listaNumeros.length - 1]
    var menor = listaNumeros[0]

    
    mensagem(`Ao todo, temos ${listaNumeros.length} números cadastrados`, txtFilanizar)
    mensagem(`O maior valor informado foi ${maior}`, txtFilanizar)
    mensagem(`O menor valor informado foi ${menor}`, txtFilanizar)
}

adicionar.onclick = function() {
    numerosAdcionados()
}

finalizar.onclick = function() {
    calculos()
}

