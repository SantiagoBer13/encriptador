// Obtén el elemento con el id "container_right"
let container_right = document.getElementById("container_right");

// Define el contenido HTML a agregar
let htmlContent = `
<div class="image-container">
    <img src="assets/lupa.png" alt="Imagen" class="message-image">
</div>
<div class="message-header">
    <h2>Ningún mensaje fue encontrado</h2>
</div>
<div class="message-text-container">
    <p class="message-text">Ingresa el texto que desees encriptar o desencriptar.</p>
</div>
`;

// Agrega el contenido HTML dentro de container_right
container_right.innerHTML = htmlContent;

// Obtén el elemento con el id "encriptar"
let encriptar = document.getElementById("encriptar");

if (encriptar) {
    encriptar.addEventListener("click", function() {
        // Obtén el campo de entrada de texto
        let input = document.getElementById("text");

        if (input) {
            // Obtén el primer elemento con la clase "message-header"
            let messageHeader = document.getElementsByClassName("message-container")[0];

            if (messageHeader) {
                // Define el contenido HTML a agregar en "message-header"
                let htmlContent = `<div class="text-encrypt-container"><p class="text-encrypt">${input.value}</p></div> <input type="button" value="Copiar" id="desencriptar" class="button-copy">`;

                // Agrega el contenido HTML dentro de messageHeader
                messageHeader.innerHTML = htmlContent;
                
                // Agrega estilos a messageHeader
                messageHeader.style.display = "flex";
                messageHeader.style.flexDirection = "column";
                messageHeader.style.justifyContent = "space-between";
                messageHeader.style.padding = "32px"

            } else {
                console.error("No se encontró ningún elemento con la clase 'message-header'.");
            }
        } else {
            console.error("No se encontró ningún elemento con el id 'text'.");
        }
    });
} else {
    console.error("No se encontró ningún elemento con el id 'encriptar'.");
}
