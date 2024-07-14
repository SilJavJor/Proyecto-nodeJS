/*  Mensajes  */

const constants = require("./constants.js");

const messagesUsers = {
    // Entidades
    USER: "Usuario",
    USERS: "Usuarios",

    // Error de usuario no encontrado
    get USER_NOT_FOUND() {
        return this.USER + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUND;
    },

    // Errror ususarios no encontrados
    get USERS_NOT_FOUNDS() {
        return this.USERS + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUNDS;
    },

    // Error al ontener todos los usuarios
    get ERROR_GETTING_ALL_USERS() {
        return constants.ERROR + constants.SPACE + constants.AL + constants.SPACE + constants.GET + 
        constants.SPACE + constants.ALL + constants.SPACE + constants.LOS + constants.SPACE + 
        this.USERS;
    },
};

module.exports = messagesUsers;