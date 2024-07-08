// 

document.addEventListener('DOMContentLoaded', () => {
    // Función para deshabilitar todas las secciones excepto main-buttons
    function disableAllSections() {
        document.querySelectorAll('.search-section, .grid-section, .action-buttons').forEach(section => {
            section.classList.add('disabled');
        });
    }

    // Función para habilitar todas las secciones
    function enableAllSections() {
        document.querySelectorAll('.search-section, .grid-section, .action-buttons').forEach(section => {
            section.classList.remove('disabled');
        });
    }

    // Función para limpiar la pantalla
    function clearScreen() {
        document.getElementById('pageTitle').innerText = 'Gestión de Datos';
        disableAllSections();
        document.querySelector('.main-buttons').classList.remove('disabled');
    }

    // Función inicial para deshabilitar todo menos main-buttons
    disableAllSections();

    // Event Listener para los botones principales
    document.querySelectorAll('.btn-main').forEach(btn => {
        btn.addEventListener('click', () => {
            clearScreen();
            enableAllSections();
            document.getElementById('pageTitle').innerText = `Gestión de ${btn.innerText}`;
            document.querySelector('.main-buttons').classList.add('disabled');
        });
    });

    // Event Listener para el botón Volver
    document.getElementById('btnBack').addEventListener('click', () => {
        clearScreen();
        document.querySelector('.main-buttons').classList.remove('disabled');
    });
});
