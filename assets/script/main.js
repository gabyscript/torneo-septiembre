/* Funciones de barajar y repartir*/

let mesa = document.querySelector("#mesa");

function barajarTarjetas(){
    var resultado = grupoTarjetas.sort(function(){
        return 0.5 - Math.random();

    })
    return resultado;
}

function repartirTarjetas (){
    
    barajarTarjetas();

    for(let tarjetasind of grupoTarjetas) {
        mesa.innerHTML += `
            <div class= 'tarjeta' data-valor='${tarjetasind.nombre}' style="background-image:url(${tarjetasind.reverso});">  
            <div class= 'contenido-tarjeta' style="background-image:url(${tarjetasind.anverso});"> 
            
            </div> 
            </div>

        `
    }
}

/* Funcion de voltear tarjetas*/

function voltear() {

    /*var cartasVolteadas = document.querySelectorAll(".descubierta");    */
    this.classList.add("descubierta");
    descubiertas = document.querySelectorAll(".descubierta");
    gritoHuaso.cloneNode().play(); 
    
}

window.addEventListener('load', repartirTarjetas());

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click",voltear);
});

