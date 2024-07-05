/*    */

const { DataTypes } = require('sequelize');

const commonUpdatedFields = {
    updatedBy: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
};

module.exports = commonUpdatedFields;