/*    */

const { DataTypes } = require('sequelize');

const commonCreatedFields = {
  createdBy: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  }
};

module.exports = commonCreatedFields;
