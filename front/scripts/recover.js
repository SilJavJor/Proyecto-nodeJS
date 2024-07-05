/*  Validaciones del formulario recuperar usuario o password  */

document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".forms");
  const email = document.querySelector("#email");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const mensajeDeCorreoEletronico = "Por favor revise su correo electronico.";
    const mensajeDeRecuperacion = "Se ha enviado un e-mail en respuesta a su solicitud de recuperación de usuario o contraseña";

    // Si el formulario es válido, lo informa en pantalla y envia los datos
    // Luego se envia a acceso
    validarFormulario() ? (alert(`${mensajeDeCorreoEletronico}\n${mensajeDeRecuperacion}`), 
     window.location.href = '../pages/access.html') : null;
  })

  function validarFormulario() {
    const porFavorIngrese = "Por favor, ingrese ";
    let esValido = true;

    // Valida el campo Email
    if (validarCampoVacio(email.value)) {
        esValido = false;
      alert(`${porFavorIngrese} su dirección de correo electrónico.`);
      email.focus();
    } else if (!validarEmail(email.value)) {
      esValido = false;
      alert("El formato del correo electrónico es inválido.");
      email.focus();
    }

    return esValido;
  }
});
