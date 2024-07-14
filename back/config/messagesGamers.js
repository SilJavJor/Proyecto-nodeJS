/*  Mensajes  */

const constants = require("./constants.js");

const messagesGamers = {
    // Entidades
    GAMER: "Jugador",
    GAMERS: "Jugadores",

    // Error de jugador no encontrado
    get GAMER_NOT_FOUND() {
        return this.GAMER + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUND;
    },

    // Errror jugadores no encontrados
    get GAMERS_NOT_FOUNDS() {
        return this.GAMERS + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUNDS;
    },

    // Error al ontener todos los jugadores
    get ERROR_GETTING_ALL_GAMERS() {
        return constants.ERROR + constants.SPACE + constants.AL + constants.SPACE + constants.GET + 
            constants.SPACE + constants.ALL + constants.SPACE + constants.LOS + constants.SPACE + 
            this.GAMERS;
    },
};

module.exports = messagesGamers;