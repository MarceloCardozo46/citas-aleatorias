let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');


function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

//////////////// Mi intento


const cambiarDeCita = () =>{
    let citaActual = Math.floor(Math.random() * 10);
    citaElem.innerText = citas[citaActual].texto;
    autorElem.textContent = citas[citaActual].autor;
}

//////// resultado

cambiarCita();
botonElem.addEventListener('click', cambiarCita);