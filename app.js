// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// CREACION DE VARIABLES
// Lista de amigos
let listaAmigos = [];

// FUNCIONES
// Agregar amigo
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    // Condición para verificar si el campo está vacío
    if (amigo === ""){
        alert("Por favor, inserte un nombre");
    } else {
        // Agregar el amigo a la lista de amigos
        listaAmigos.push(amigo);
        console.log("Amigo agregado:", amigo);
        console.log("Lista de amigos:", listaAmigos);
        actualizarListaAmigos();
    }
    document.getElementById("amigo").value = "";
}

// Mostrar lista de amigos que han sido agregados
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let amigo = document.createElement("li");
        amigo.textContent = listaAmigos[i];
        lista.appendChild(amigo);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía");
        return;
    }
    let amigoSeleccionado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").innerHTML = "El amigo secreto es: " + amigoSeleccionado;

    // Se limpia la lista de amigos para que se pueda volver a jugar
    listaAmigos = [];
    actualizarListaAmigos();
}