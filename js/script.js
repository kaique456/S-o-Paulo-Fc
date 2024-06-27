let bigImg = document.querySelector('.big-img img');

function showImg(pic) {
    bigImg.src = pic

}

// Troca foto dos jogadores
const fotoGrande = document.getElementById('jogadores')
const nome = document.getElementById('nome')

function mostraFoto(param) {
    fotoGrande.src = `assets/${param}.webp`
    nome.innerHTML = param

}