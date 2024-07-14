/*  Mensajes  */

const constants = require("./constants.js");

const messagesRoles = {
    // Entidades
    ROL: "Rol",
    ROLES: "Roles",

    // Error rol no encontrado
    get ROL_NOT_FOUND() {
        return this.ROL + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUND;
    },

    // Errror roles no encontrados
    get ROLES_NOT_FOUNDS() {
        return this.ROLES + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUNDS;
    },

    // Error al ontener todos los roles
    get ERROR_GETTING_ALL_ROLES() {
        return constants.ERROR + constants.SPACE + constants.AL + constants.SPACE + constants.GET + 
            constants.SPACE + constants.ALL + constants.SPACE + constants.LOS + constants.SPACE + 
            this.ROLES;
    },
};

module.exports = messagesRoles;