/*    */

const { DataTypes } = require('sequelize');

const commonNameFields = {
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    }
};

module.exports = commonNameFields;
