/*    */

const { DataTypes } = require('sequelize');

const commonIdFields = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
};

module.exports = commonIdFields;
