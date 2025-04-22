const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Option = sequelize.define('Option', {
  optionText: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Option;
