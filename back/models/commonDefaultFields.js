/*    */

const { DataTypes } = require('sequelize');

const commonDefaultFields = {
    default: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
    },

};

module.exports = commonDefaultFields;
