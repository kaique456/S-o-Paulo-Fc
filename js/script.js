let bigImg = document.querySelector('.big-img img');

function showImg(pic) {
    bigImg.src = pic

}

// Troca foto dos jogadores
const fotoGrande = document.getElementById('jogadores')
const nome = document.getElementById('nome')

function mostraFoto(Param) {
    fotoGrande.src = `assets/${Param}.webp`
    nome.innerHTML = Param

}