let musicas = [
    { titulo: 'Guitar', artista: 'Random', src: 'Musicas/Born a Rockstar (Instrumental) - NEFFEX.mp3', img: 'Imagem/impala.jpg' },
    { titulo: 'Rock', artista: 'Random', src: 'Musicas/Inspired (Instrumental) - NEFFEX.mp3', img: 'Imagem/carro.jpg' },
    { titulo: 'Rock-Roll', artista: 'Random', src: 'Musicas/Believe (Instrumental) - NEFFEX.mp3', img: 'Imagem/brinquedo.jpg' },
    { titulo: 'The Rock', artista: 'Random', src: 'Musicas/Addict (Instrumental) - NEFFEX.mp3', img: 'Imagem/velho.jpg' }

]
let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.play').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.tras').addEventListener('click', () => {
    
    
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.frente').addEventListener('click', () => {
    
    
    indexMusica++;
    if (indexMusica > 3){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
    
}

function tocarMusica(){
    musica.play();
    document.querySelector('.pause').style.display = 'inline-block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'inline-block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}