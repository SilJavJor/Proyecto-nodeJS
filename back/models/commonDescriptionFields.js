/*    */

const { DataTypes } = require('sequelize');

const commonDescriptionFields = {
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
};

module.exports = commonDescriptionFields;
