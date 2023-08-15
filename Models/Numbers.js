const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Number extends Model {}
Number.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    highscore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Number',
    tableName: 'numbers',
  }
);

module.exports = Number;
