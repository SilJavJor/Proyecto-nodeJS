/*    */

const { DataTypes } = require('sequelize');

const commonActiveFields = {
  active: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0
  },
};

module.exports = commonActiveFields;
