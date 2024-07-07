//import axios from 'axios';
//const axios = require('axios');

// Event listener para el botón "Todos"
document.getElementById('fetchAllBtn').addEventListener('click', fetchAllUsers);

// Función para buscar todos los usuarios en la base de datos
function fetchAllUsers() {
    axios.get('http://localhost:3030/users/')
        .then(response => {
            console.log('Usuarios obtenidos:', response.data);
            // Función para llenar la tabla con los usuarios recibidos
            populateTable(response.data);
        })
        .catch(error => {
            console.error('Hubo un error al buscar los usuarios:', error);
            alert('Hubo un error al buscar los usuarios. Por favor, intenta de nuevo.');
        });
}

// Función para llenar la tabla con los usuarios recibidos
function populateTable(data) {
    const tbody = document.getElementById('userTable').querySelector('tbody');
    // Limpiar tabla antes de insertar datos nuevos
    tbody.innerHTML = '';
    
    data.forEach(user => {
        const row = `<tr>
            <td>${user.id}</td>
            <td>${user.user}</td>
            <td>${user.pass}</td>
            <td>${user.createdAt}</td>
            <td>${user.modifiedAt}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}


// Event listener para el botón "Por ID"
document.getElementById('fetchByIdBtn').addEventListener('click', fetchUserById);

// Función para buscar un usuario por su ID
function fetchUserById() {
    const userId = document.getElementById('searchId').value;

    axios.get(`http://localhost:3030/users/${userId}`)
        .then(response => {
            if (response.data) {
                // Llama a la función para llenar la tabla con el usuario encontrado
                populateTable([response.data]);
            } else {
                alert('Usuario no encontrado.');
            }
        })
        .catch(error => {
            console.error('Hubo un error al buscar el usuario por ID:', error);
            alert('Hubo un error al buscar el usuario por ID. Por favor, intenta de nuevo.');
        });
}

// Botones y sus funciones restantes
function addUser() {
}

function editUser() {
}

function deleteUser() {
}

function saveUser() {
}

function cancelAction() {
}
