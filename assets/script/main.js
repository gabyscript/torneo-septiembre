/*Variables globables y arreglos*/

const grupoTarjetas = [
    {nombre: "Grand",
     src: "https://i.postimg.cc/yYZFp56C/GRAND-sin-borde.png",
     tipo: "grand"   
    },
    {nombre: "Major",
    src: "https://i.postimg.cc/cHznX7VJ/major-sin-borde.png",
    tipo: "major"
    },
    {nombre: "Minor",
    src: "https://i.postimg.cc/bYK6v1s8/minor-sin-borde.png",
    tipo: "minor"
    },
    {nombre: "Sinpremio",
    src: "https://i.postimg.cc/0y2CBjhL/Seleccionar-carta-2.png",
    tipo: "nopremio"
    }];


const totalTarjetas = grupoTarjetas.concat(grupoTarjetas).concat(grupoTarjetas);

const gritoHuaso= document.querySelector('#sonido-grito');

/* Funciones de barajar y repartir*/

let mesa = document.querySelector("#mesa");

function barajarTarjetas(){
    var resultado = totalTarjetas.sort(function(){
        return 0.5 - Math.random();

    });

    return resultado;
}

function repartirTarjetas (){
    
    let tarjetasBarajadas = barajarTarjetas();

    for(let tarjetasind of totalTarjetas) {
        mesa.innerHTML += `
            <div class= 'tarjeta' data-valor='${tarjetasind.tipo}'>  
            <div class= 'contenido-tarjeta' style="background-image:url(${tarjetasind.src});"> 
            
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

    comparar(descubiertas);
}

repartirTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click",voltear);
});

