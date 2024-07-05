/*  */

const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const commonIdFields = require('./commonIdFields');
const commonActiveFields = require('./commonActiveFields');
const commonCreatedFields = require('./commonCreatedFields');
const commonUpdatedFields = require('./commonUpdatedFields');

const Gamer = sequelize.define("gamers", {
    ...commonIdFields,
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nickName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ...commonActiveFields,
    ...commonCreatedFields,
    ...commonUpdatedFields
}, {
    timestamps: true,
});

module.exports = Gamer;
