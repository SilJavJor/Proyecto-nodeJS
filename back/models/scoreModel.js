/*  */

const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const commonIdFields = require('./commonIdFields');
const commonActiveFields = require('./commonActiveFields');
const commonCreatedFields = require('./commonCreatedFields');
const commonUpdatedFields = require('./commonUpdatedFields');

const Score = sequelize.define("scores", {
    ...commonIdFields,
    gameId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },    
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    },    
    ...commonActiveFields,
    ...commonCreatedFields,
    ...commonUpdatedFields
}, {
    timestamps: true,
});

module.exports = Score;
