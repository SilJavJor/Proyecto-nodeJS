/* Validaciones del formulario registro */

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".forms");
  const usuario = document.querySelector("#usuario");
  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  const password = document.querySelector("#password");
  const repetirPassword = document.querySelector("#repeat-password");
  const email = document.querySelector("#email");
  const telefono = document.querySelector("#telefono");
  const comentario = document.querySelector("#comentario");
  const terminos = document.querySelector("#terminos");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    /*
      if (validarFormulario()) {
          // Si el formulario es válido, puedes enviar los datos
          console.log("Formulario válido. Enviando datos...");

      // Si el formulario es válido, lo informa en pantalla
      alert('¡ Datos enviados correctamente !');

      // Hace un reset de los campos
      this.reset(); 
      }
    */

    // Si el formulario es válido, lo informa en pantalla y envia los datos
    // Luego se envia a acceso
    validarFormulario() ? (alert('¡ Datos registrados correctamente !'), 
     window.location.href = '../pages/access.html') : null;
  });

  function validarFormulario() {
    const porFavorIngrese = "Por favor, ingrese "; 
    let esValido = true;

    // Valida el campo usuario
    /*
    if (usuario.value.trim() === "") {
      esValido = false;
      alert(porFavorIngrese + "un usuario.");
      usuario.focus();
    }
    */
    usuario.value.trim() === "" ? (esValido = false, alert(`${porFavorIngrese} el usuario`), 
    usuario.focus()) : null;

    // Valida el campo nombre
    /*
    if ((esValido) && (nombre.value.trim() === "")) {
      esValido = false;
      alert(porFavorIngrese + "su nombre.");
      nombre.focus();
    }
    */
    (esValido && nombre.value.trim() === "") ? (esValido = false,
    alert(`${porFavorIngrese} su nombre.`), nombre.focus()) : null;

    // Valida el campo apellido
    /*
    if ((esValido) && (apellido.value.trim() === "")) {
      esValido = false;
      alert(`${porFavorIngrese} su apellido.`);
      apellido.focus();
    }
    */
    (esValido && apellido.value.trim() === "") ? (esValido = false,
    alert(`${porFavorIngrese} su apellido.`), apellido.focus()) : null;

    // Valida el campo contraseña
    /*
    if ((esValido) && (password.value.trim() === "")) {
        esValido = false;
        alert(`${porFavorIngrese} su contraseña.`);
        password.focus();
    }
    */
    (esValido && password.value.trim() === "") ? (esValido = false, 
    alert(`${porFavorIngrese} su contraseña.`), password.focus()) : null;

    // Valida el campo repetir contraseña
    if (esValido) {
      if (repetirPassword.value.trim() === "") {
        esValido = false;
        alert(porFavorIngrese + "la repeticion de su contraseña.");
        repetirPass.focus();
      } else if (!(password.value.trim() === repetirPassword.value.trim())) {
        esValido = false;
        alert("Las dos contraseñas no coinciden.");
        repetirPassword.focus();
      }
    }

    // Valida el campo email
    if (esValido) {
      if (email.value.trim() === "") {
        esValido = false;
        alert(porFavorIngrese + "su dirección de correo electrónico.");
        email.focus();
      } else if (!validarEmail(email.value)) {
        esValido = false;
        alert("El formato del correo electrónico no es válido.");
        email.focus();
      }
    }

    // Valida el campo teléfono (opcional)
    if (esValido) {
      if (telefono.value.trim() === "") {
        esValido = false;
        alert(porFavorIngrese + "su numero de telefono.");
        telefono.focus();
      } else if (!validarTelefono(telefono.value)) {
        esValido = false;
        alert("El formato del teléfono no es válido.");
        telefono.focus();
      }
    }

    // Valida el campo comentario
    /*
    if ((esValido) && comentario.value.trim() === "") {
      esValido = false;
      alert(`${porFavorIngrese} un comentario.`);
      comentario.focus();
    }
    */

    (esValido && comentario.value.trim() === "") ? (esValido = false, 
    alert(`${porFavorIngrese} un comentario.`), comentario.focus()) : null;

    // Valida el campo contraseña
    (esValido && !validarCheckBox(terminos)) ? (esValido = false, 
      alert(`Por favor acepte los terminos y condiciones.`), terminos.focus()) : null;

    return esValido;
  }
});
