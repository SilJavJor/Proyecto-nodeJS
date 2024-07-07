/*  */

const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const commonIdFields = require('./commonIdFields');
const commonActiveFields = require('./commonActiveFields');
const commonCreatedFields = require('./commonCreatedFields');
const commonUpdatedFields = require('./commonUpdatedFields');

const Account = sequelize.define("accounts", {
    ...commonIdFields,
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ...commonActiveFields,
    ...commonCreatedFields,
    ...commonUpdatedFields
}, {
    timestamps: true,
});

module.exports = Account;
