/*  */

const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const commonIdFields = require('./commonIdFields');
const commonDescriptionFields = require('./commonDescriptionFields');
const commonNameFields = require('./commonNameFields');
const commonActiveFields = require('./commonActiveFields');
const commonCreatedFields = require('./commonCreatedFields');
const commonUpdatedFields = require('./commonUpdatedFields');

const Game = sequelize.define("games", {
    ...commonIdFields,
    gamerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ...commonNameFields,
    ...commonDescriptionFields,
    ...commonActiveFields,
    ...commonCreatedFields,
    ...commonUpdatedFields
}, {
    timestamps: true,
});

module.exports = Game;