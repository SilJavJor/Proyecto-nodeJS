// crud.js

// Api de usuarios
const API_USERS = 'http://localhost:3030/users/';

// DataTables
// Inicializar
$(document).ready(function() {
    $('#detalle-registro').DataTable({
        "paging": true,
        "searching": true,
        "info": true
    });
});

// Funciones CRUD
function buscarTodosLosRegistros() {
    axios.get(API_USERS)
        .then(function(response) {
            llenarTabla(response.data);
        })
        .catch(function(error) {
            console.log(error);
    });
}

function buscarRegistroPorId(id) {
    if (id !== undefined && id !== null && id !== "") {
        axios.get(API_USERS + id)
            .then(function(response) {
                llenarTabla(response.data);
        })
            .catch(function(error) {
                console.log(error);
        });
    } else {
        console.log("El ID debe ser mayor o igual a 1");
        alert("El ID debe ser mayor o igual a 1");
    }
}

function agregarRegistro(event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var clave = document.getElementById('clave').value;

    axios.post(API_USERS, { usuario: usuario, clave: clave })
        .then(function(response) {
            buscarTodosLosRegistros();

            alert('Usuario agregado exitosamente');
        })
        .catch(function(error) {
            console.log(error);
        });
}

function modificarRegistro(event) {
    event.preventDefault();

    var id = document.getElementById('usuario-mod').dataset.id;
    var usuario = document.getElementById('usuario-mod').value;
    var clave = document.getElementById('clave-mod').value;
    
    axios.put('http://localhost:3030/users/' + id, { usuario: usuario, clave: clave })
    //axios.put(API_USERS + id, { usuario: usuario, clave: clave })
        .then(function(response) {
            buscarTodosLosRegistros();
            
            alert('Usuario modificado exitosamente');
        })
        .catch(function(error) {
            console.log(error);
        });
}

function eliminarRegistro(event) {
    event.preventDefault();

    var id = document.getElementById('usuario-elim').dataset.id;

    //axios.delete('http://localhost:3030/users/' + id)
    axios.delete(API_USERS + id)
        .then(function(response) {
            buscarTodosLosRegistros();

            alert('Usuario eliminado exitosamente');
        })
        .catch(function(error) {
            console.log(error);
        });
}

function llenarTabla(data) {
    var table = $('#detalle-registro').DataTable();

    table.clear();

    if (Array.isArray(data)) {
        data.forEach(function(usuarios) {
            table.row.add([
                usuarios.id || '',
                usuarios.user || '',
                usuarios.pass || '',
                usuarios.email || '',
                usuarios.checked || '',
                usuarios.active || '',
                usuarios.createdAt || '',
                usuarios.modifiedAt || ''
            ]).draw(false);
        });
    } else {
        table.row.add([
            data.id || '',
            data.user || '',
            data.pass || '',
            data.email || '',
            data.checked || '',
            data.active || '',
            data.createdAt || '',
            data.modifiedAt || ''
        ]).draw(false);
    }
}

export { buscarTodosLosRegistros, buscarRegistroPorId, agregarRegistro, modificarRegistro, eliminarRegistro };
