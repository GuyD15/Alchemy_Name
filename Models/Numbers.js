const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Defines a Number class and initializes 'Number' model.
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
