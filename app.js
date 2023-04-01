function cambiarContenido() {
    //Obtenemos los elementos HTML que queremos modificar
    var titulo = document.getElementById("titulo");
    var parrafo = document.getElementById("parrafo");

    //Modificamos el contenido de los elementos
    titulo.innerHTML = "¡Hola de nuevo!";
    parrafo.innerHTML = "El contenido ha sido cambiado con éxito.";
}

function regresarContenido() {
    //Obtenemos los elementos HTML que queremos modificar
    var titulo = document.getElementById("titulo");
    var parrafo = document.getElementById("parrafo");

    //Modificamos el contenido de los elementos
    titulo.innerHTML = "¡Hola Mundo!";
    parrafo.innerHTML = "Este es un ejemplo del uso del DOM.";
}