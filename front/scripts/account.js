/* Validaciones del formulario crear cuenta */

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".forms");
  const usuario = document.querySelector("#usuario");
  const password = document.querySelector("#password");
  const repetirPassword = document.querySelector("#repeat-password");
  const email = document.querySelector("#email");
  const terminos = document.querySelector("#terminos");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const mensajeDeCorreoEletronico = "Por favor, revise su correo electronico.";
    const mensajeDeValidacion = "Se ha enviado un e-mail para la validación de su cuenta.";

    // Si el formulario es válido, lo informa en pantalla y envia los datos
    // Luego se envia a acceso
    validarFormulario() ? (alert(`${mensajeDeCorreoEletronico}\n${mensajeDeValidacion}`), 
     window.location.href = '../pages/access.html') : null;
  });

  function validarFormulario() {
    const porFavorIngrese = "Por favor, ingrese ";
    let esValido = true;

    // Valida el campo usuario
    validarCampoVacio(usuario.value) ? (esValido = false, alert(`${porFavorIngrese} el usuario`),
    usuario.focus()) : null;

    // Valida el campo contraseña
    (esValido && validarCampoVacio(password.value)) ? (esValido = false, 
    alert(`${porFavorIngrese} la contraseña.`), password.focus()) : null;

    // Valida el campo repetir contraseña
    if (esValido) {
      if (repetirPassword.value.trim() === "") {
        esValido = false;
        alert(`${porFavorIngrese} la repeticion de su contraseña.`);
        repetirPass.focus();
      } else if (!(password.value.trim() === repetirPassword.value.trim())) {
        esValido = false;
        alert("Las contraseñas no coinciden.");
        repetirPassword.focus();
      }
    }

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

    // Valida el campo contraseña
    (esValido && !validarCheckBox(terminos)) ? (esValido = false, 
      alert(`Por favor acepte los terminos y condiciones.`), terminos.focus()) : null;

    return esValido;
  }
});
