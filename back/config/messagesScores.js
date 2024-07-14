/*  Mensajes  */

const constants = require("./constants.js");

const messagesScores = {
    // Entidades
    SCORE: "Puntaje",
    SCORES: "Puntajes",

    // Error puntaje no encontrado
    get SCORE_NOT_FOUND() {
        return this.SCORE + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUND;
    },

    // Error puntajes no encontrados
    get SCORES_NOT_FOUNDS() {
        return this.SCORES + constants.SPACE + constants.NOT + constants.SPACE + constants.FOUNDS;
    },

    // Error al ontener todos los puntajes
    get ERROR_GETTING_ALL_SCORES() {
        return constants.ERROR + constants.SPACE + constants.AL + constants.SPACE + constants.GET + 
            constants.SPACE + constants.ALL + constants.SPACE + constants.LOS + constants.SPACE + 
            this.SCORES;
    },
};

module.exports = messagesScores;