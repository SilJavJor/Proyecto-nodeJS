/*  Mensajes  */

const constants = require("./constants.js");

const messagesGames = {
    // Entidades
    GAME: "Juego",
    GAMES: "Juegos",

    // Error juego no encontrado
    get GAME_NOT_FOUND() {
        return this.GAME + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUND;
    },

    // Errror juegos no encontrados
    get GAMES_NOT_FOUNDS() {
        return this.GAMES + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUNDS;
    },

    // Error al ontener todos los juegos
    get ERROR_GETTING_ALL_GAMES() {
        return constants.ERROR + constants.SPACE + constants.AL + constants.SPACE + constants.GET + 
            constants.SPACE + constants.ALL + constants.SPACE + constants.LOS + constants.SPACE + 
            this.GAMES;
    },
};

module.exports = messagesGames;