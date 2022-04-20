var anoNascimento = document.querySelector("#anoNascimento")
var botao = document.querySelector("#botao")
var masculino = document.getElementById("masculino")
var feminino = document.getElementById("feminino")
var imagem = document.createElement('img')
var mensagem = document.createElement('p')
var anoAtual = new Date().getFullYear()

function validarAnoNascimento(anoNascimento){
    if (anoNascimento >= 1900 && anoNascimento <= anoAtual) {
        return anoNascimento
    }
    else {
       alert('Ano de nascimento inválido!!!!')
    }
}


function verificarIdade(){
    var idade = anoAtual - validarAnoNascimento(Number(anoNascimento.value))
    console.log(idade);
    var pessoa

    if (idade >= 0 && idade <= 17) {
        var pessoa = 'Criança'
    } else if (idade >= 18 && idade <= 50) {
        var pessoa = 'Adulto'
    } else if (idade >= 51 && idade <= 75) {
        var pessoa = 'Velho'
    } else if (idade > 75) {
        var pessoa = 'Morreu'
    }

    return pessoa
}

botao.onclick = function() {
    if (masculino.checked == true) {
        switch (verificarIdade()) {
            case 'Criança':
                imagem.src = "img/menino.png"
                break;
            case 'Adulto':
                imagem.src = "img/homem.png"
                break;
            case 'Velho':
                imagem.src = "img/velho.png"
                break;
            case 'Morreu':
                imagem.src = "img/morreu.png"
                break;
            default:
                break;
        }
    } else if (feminino.checked == true) {
        switch (verificarIdade()) {
            case 'Criança':
                imagem.src = "img/menina.png"
                break;
            case 'Adulto':
                imagem.src = "img/mulher.png"
                break;
            case 'Velho':
                imagem.src = "img/velha.png"
                break;
            case 'Morreu':
                imagem.src = "img/morreu.png"
                break;
            default:
                break;
        }
    }
    
    botao.insertAdjacentElement("afterend", document.body.appendChild(imagem))


}


