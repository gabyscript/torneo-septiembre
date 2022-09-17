let bienvenida = document.querySelector('#bienvenida');
bienvenida.classList.add('visible');


const iniciarButton = document.querySelector('#iniciar-button');
const musicaFondo = document.querySelector('#music-consentida');

iniciarButton.addEventListener('click', function(){
    musicaFondo.play();
    bienvenida.classList.remove('visible');
    document.querySelector('#mesa').classList.add('visible');
})


musicaFondo.loop= true;

musicaFondo.addEventListener('ended', function(){
    this.currentTime= 0;
    this.play();
},false);