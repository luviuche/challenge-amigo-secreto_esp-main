// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// CREACION DE VARIABLES
// Lista de amigos
let listaDeAmigos = [];

// FUNCIONES
// Agregar amigo
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    // Condición para verificar si el campo está vacío
    if (amigo === ""){
        alert("Por favor, inserte un nombre");
    } else {
        // Agregar el amigo a la lista de amigos
        listaDeAmigos.push(amigo);
    }
    document.getElementById("amigo").value = "";
}