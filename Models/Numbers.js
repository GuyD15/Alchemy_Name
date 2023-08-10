const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Number extends Model {}
Number.init(
  {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_even: {
      type: DataTypes.INTEGER,
      get() {
        return this.value % 2 === 0;
      },
    },
  },
  {
    sequelize,
    modelName: 'Number',
    tableName: 'numbers',
  }
);

module.exports = Number;
