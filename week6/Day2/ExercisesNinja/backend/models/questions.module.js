const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correctAnswer: {
    type: DataTypes.INTEGER
  }
});

module.exports = Question;
