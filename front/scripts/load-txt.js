/*  Funcion para obtener los datos de un archivo txt  */

addEventListener('DOMContentLoaded', (event) => {
    // Obtener el elemento <p> por su id
    const parrafo = document.getElementById('information');

    // Realizar una petición para cargar el archivo de texto
    var req = new XMLHttpRequest();

    req.open('GET', '../src/fps/information.txt', true);

    req.onreadystatechange = function () {
        if (req.readyState === 4 && req.status === 200) {
          // Cuando la solicitud es exitosa, asignar el contenido del archivo 
          // al texto del <p>
          parrafo.textContent = req.responseText;
        }
    };

    req.send();
});
