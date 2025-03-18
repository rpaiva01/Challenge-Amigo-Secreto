// Array para almacenar los nombres
const amigos = [];

// Función para agregar nombres
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        actualizarListaAmigos(); // Actualizar la lista visible
        input.value = ""; // Limpiar el campo de texto
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    for (let i = 0; i < amigos.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = amigos[i];
        lista.appendChild(listItem);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados previos
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSeleccionado}!</li>`;
}

