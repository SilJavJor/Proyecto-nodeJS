/* Validaciones del formulario contact */

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".forms");
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const email = document.querySelector("#email");
  const asunto = document.querySelector("#asunto");
  const telefono = document.querySelector("#telefono");
  const mensaje = document.querySelector("#mensaje");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Si el formulario es válido, lo informa en pantalla
    validarFormulario() ? (alert('¡Datos enviados correctamente!'), this.reset()) : null;

    // Si el formulario es válido, consola y pantalla
    //validarFormulario() ? (console.log("Formulario válido. Enviando datos..."), 
    //alert('¡Datos enviados correctamente!'), this.reset()) : null;  });
  });
  
  function validarFormulario() {
    const porFavorIngrese = "Por favor, ingrese ";
    let esValido = true;

    // Valida el campo nombre
    nombre.value.trim() === "" ? (esValido = false, alert(`${porFavorIngrese} su nombre.`),
    nombre.focus()) : null;

    // Valida el campo apellido
    (esValido && apellido.value.trim() === "") ? (esValido = false, 
    alert(`${porFavorIngrese} su apellido.`), apellido.focus()) : null;

    // Valida el campo email
    if (esValido) {
      if (email.value.trim() === "") {
        esValido = false;
        alert(`${porFavorIngrese} su dirección de correo electrónico.`);
        email.focus();
      } else if (!validarEmail(email.value)) {
        esValido = false;
        alert("El formato del correo electrónico no es válido.");
        email.focus();
      }
    }

    // Valida el campo asunto
    (esValido && asunto.value.trim() === "") ? (esValido = false, 
    alert(`${porFavorIngrese} el asunto.`), asunto.focus()) : null;

    // Valida el campo teléfono (opcional)
    esValido && !validarTelefono(telefono.value) ? (esValido = false, 
    alert("El formato del teléfono no es válido."), telefono.focus()) : null;

    // Valida el campo mensaje
    (esValido && mensaje.value.trim() === "") ? (esValido = false, alert(porFavorIngrese + "un mensaje."), 
    mensaje.focus()) : null;

    return esValido;
  }

});
