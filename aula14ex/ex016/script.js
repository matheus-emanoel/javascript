var btn = document.querySelector("#botao")
var texto = document.createElement("p")
texto.innerText = "Preparando a contagem..."


btn.onclick = function() {
    var inicio = Number(document.querySelector("#inicio").value)
    var fim = Number(document.querySelector("#fim").value)
    var passo = Number(document.querySelector("#passo").value)

    if(fim != 0 && passo != 0) {
        texto.innerText = ""
        if(inicio < fim) {
            for(inicio; inicio <= fim; inicio+=passo){
        
                texto.innerText += ` ${inicio} > `
                console.log(inicio);
            }
        } else {
            for(fim; fim <= inicio; inicio-=passo){
        
                texto.innerText += ` ${inicio} > `
            }
        }
    } else {
        alert("[ERRO] Verifique os dados e tente novamente")
    }
    texto.innerText += " Fim "

}
btn.insertAdjacentElement("afterend", texto)