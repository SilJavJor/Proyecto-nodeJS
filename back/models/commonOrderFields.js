/*    */

const { DataTypes } = require('sequelize');

const commonOrderFields = {
    order: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
    },

};

module.exports = commonOrderFields;