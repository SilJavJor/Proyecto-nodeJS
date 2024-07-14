/*  Mensajes  */

const constants = require("./constants.js");

const messagesAccounts = {
    // Entidades
    ACCOUNT: "Cuenta",
    ACCOUNTS: "Cuentas",

    // Error de cuenta no encontrado
    get ACCOUNT_NOT_FOUND() {
        return this.ACCOUNT + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUND;
    },

    // Errror cuentas no encontrados
    get ACCOUNTS_NOT_FOUNDS() {
        return this.ACCOUNTS + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUNDS;
    },

    // Error al ontener todos las cuentas
    get ERROR_GETTING_ALL_ACCOUNTS() {
        return constants.ERROR + constants.SPACE + constants.AL + constants.SPACE + constants.GET + 
            constants.SPACE + constants.ALL + constants.SPACE +  + constants.LAS + constants.SPACE + 
            this.ACCOUNTS;
    },
};

module.exports = messagesAccounts;