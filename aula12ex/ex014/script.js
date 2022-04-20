function carregar() {
    var mensagem = document.querySelector("#mensagem")
    var imagem = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são  ${hora} horas.`
    if (hora >= 0 && hora <= 11) {
        imagem.src = 'img/dia-pq.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 17) {
        imagem.src = 'img/tarde-pq.jpg'
        document.body.style.background = '#b9846f'
    } else if (hora >= 18 && hora <= 23) {
        imagem.src = 'img/noite-pq.png'
        document.body.style.background = '#515154'
    }
}


