/*    */

const constants = require("../config/constants.js");

const constants = {
    SPACE: " ",
    YES: "si",
    NOT: "no",
    FOUND: "encontrada/o",
    FOUNDS: "encontrada/o/s",

    USER: "Usuario",
    ROL: "Rol",
    ACCOUNT: "Cuenta",
    GAMER: "Jugador",
    GAME: "Juego",
    SCORE: "Puntaje",

    get USER_NOT_FOUNDS() {
        return this.USER + this.SPACE + this.NOT + this.SPACE + this.FOUNDS;
    },

    get ROL_NOT_FOUNDS() {
        return this.ROL + this.SPACE + this.NOT + this.SPACE + this.FOUNDS;
    },

    get ACCOUNT_NOT_FOUNDS() {
        return this.ACCOUNT + this.SPACE + this.NOT + this.SPACE + this.FOUNDS;
    },

    get GAMER_NOT_FOUNDS() {
        return this.GAMER + this.SPACE + this.NOT + this.SPACE + this.FOUNDS;
    },

    get GAME_NOT_FOUNDS() {
        return this.GAME + this.SPACE + this.NOT + this.SPACE + this.FOUNDS;
    },

    get SCORE_NOT_FOUNDS() {
        return this.SCORE + this.SPACE + this.NOT + this.SPACE + this.FOUNDS;
    },
};

module.exports = constants;