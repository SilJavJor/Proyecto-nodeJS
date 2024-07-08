// 

const baseURL = 'http://localhost:3030/users/';

// Carga usuario por ID
function fetchByData(id) {
    //axios.get(`http://localhost:3030/users/${id}`)
    axios.get(`${baseURL}${id}`)
        .then(response => {
            displayData([response.data]);
        })
        .catch(error => {
            console.error(`Error al cargar el usuario con ID ${id}:`, error);
        });
}

// Carga todos los usuarios
function fetchAllData() {
    //axios.get('http://localhost:3030/users/')
    axios.get(baseURL)
        .then(response => {
            displayData(response.data);
        })
        .catch(error => {
            console.error('Error al cargar todos los usuarios:', error);
        });
}

// Función para mostrar usuarios en la tabla
function displayData(data) {
    const tbody = document.querySelector('#Table tbody');
    tbody.innerHTML = '';

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.user}</td>
            <td>${item.pass}</td>
            <td>${item.createdAt}</td>
            <td>${item.updatedAt}</td>
        `;
        tbody.appendChild(row);
    });
}

// Event Listeners para los botones de búsqueda
document.getElementById('fetchBtnAll').addEventListener('click', fetchAllData);

document.getElementById('fetchBtnBy').addEventListener('click', () => {
    const userId = document.getElementById('searchId').value;
    fetchByData(userId);
});
