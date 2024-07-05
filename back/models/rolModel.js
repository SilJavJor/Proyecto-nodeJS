/*  */

const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const commonIdFields = require('./commonIdFields');
const commonDescriptionFields = require('./commonDescriptionFields');
const commonDefaultFields = require('./commonDefaultFields');
const commonOrderFields = require('./commonOrderFields');
const commonActiveFields = require('./commonActiveFields');
const commonCreatedFields = require('./commonCreatedFields');
const commonUpdatedFields = require('./commonUpdatedFields');

const Rol = sequelize.define("roles", {
    ...commonIdFields,
    ...commonDescriptionFields,
    ...commonDefaultFields,
    ...commonOrderFields,
    ...commonActiveFields,
    ...commonCreatedFields,
    ...commonUpdatedFields
}, {
    timestamps: true,
});

module.exports = Rol;
