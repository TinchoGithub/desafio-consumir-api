const botonRequest = document.getElementById('boton-chiste').addEventListener('click', obtenerChiste);
const imagen = '../assets/img/bmo.gif';

/* ASYNC AWAIT */

async function obtenerChiste() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Programming?lang=es&idRange=1-6");
        const data = await response.json();
        console.log(data);

        const contenido = document.getElementById("contenido");
        const botonResponse = document.getElementById("boton-respuesta");

        if (data.type === "twopart") {
            contenido.innerHTML = `<p><strong>${data.setup}</strong></p>`;
            botonResponse.style.display = "inline";
            botonResponse.onclick = () => mostrarRespuesta(data.delivery);
        } else if (data.type === "single") {
            contenido.innerHTML = `<p>${data.joke}</p>
            <img style="width: 100px;" src="${imagen}" alt="Imagen">`;
            botonResponse.style.display = "none";
        }
    } catch (error) {
        console.log(error);
    }
}

function mostrarRespuesta(delivery) {
    const contenido = document.getElementById("contenido");
    contenido.innerHTML += `
    <p class="text-warning"><strong>${delivery}</strong> </p>
    <img style="width: 100px;" src="${imagen}" alt="Imagen">`;
    document.getElementById("boton-respuesta").style.display = "none";
    document.getElementById("boton-chiste").style.display = "inline";

}

/* FETCH */

//  function obtenerChiste() {
//      fetch("https://v2.jokeapi.dev/joke/Programming?lang=es&idRange=1-6")
//          .then(response => response.json())
//          .then(data => {
//              console.log(data);

//              const contenido = document.getElementById("contenido");
//              const botonResponse = document.getElementById("boton-respuesta");

//              if (data.type === "twopart") {
//                  let setup = data.setup;
//                  let delivery = data.delivery;

//                  contenido.innerHTML = `<p><strong>${setup}</strong></p>`;

//                  botonResponse.style.display = "inline";
//                  botonResponse.onclick = () => mostrarRespuesta(delivery);
//              } else if (data.type === "single") {
//                  let joke = data.joke;

//                  contenido.innerHTML = `<p>${joke}</p>
//                   <img style="width: 100px;" src="${imagen}" alt="Imagen">`;
//                  botonResponse.style.display = "none";
//              }
//          })
//          .catch(error => {
//              console.log(error);
//          });
//  }


