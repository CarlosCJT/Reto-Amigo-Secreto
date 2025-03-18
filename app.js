
let amigos = [];

const inputNombre = document.getElementById("amigo");
const listaAmigosHTML = document.getElementById("listaAmigos");
const resultadoHTML = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    inputNombre.value = "";
    inputNombre.focus();
}

function mostrarLista() {
    listaAmigosHTML.innerHTML = "";
    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigosHTML.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    
    resultadoHTML.innerHTML = `<li> :3 El nombre del amigo secreto es <strong>${amigoSecreto}</strong> 🎉</li>`;
}
