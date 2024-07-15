// scripts.js

import { buscarTodosLosRegistros, buscarRegistroPorId, agregarRegistro, modificarRegistro, eliminarRegistro } from './crud.js';

// Funciones para cambiar de pestaña al hacer clic en los botones
function switchTab(tabId) {
    var tab = new bootstrap.Tab(document.getElementById(tabId));

    tab.show();
}

// Eventos de botones
document.getElementById('buscar-todos').addEventListener('click', function() {
    buscarTodosLosRegistros();
});

document.getElementById('buscar-por').addEventListener('click', function() {
    var id = document.getElementById('buscar-id').value;

    buscarRegistroPorId(id);
});

document.getElementById('agregar-tab-btn').addEventListener('click', function() {
    switchTab('agregar-tab');
});

document.getElementById('modificar-tab-btn').addEventListener('click', function() {
    switchTab('modificar-tab');
});

document.getElementById('eliminar-tab-btn').addEventListener('click', function() {
    switchTab('eliminar-tab');
});

// Asociar formularios a funciones CRUD
document.getElementById('agregar-form').addEventListener('submit', agregarRegistro);
document.getElementById('modificar-form').addEventListener('submit', modificarRegistro);
document.getElementById('eliminar-form').addEventListener('submit', eliminarRegistro);
