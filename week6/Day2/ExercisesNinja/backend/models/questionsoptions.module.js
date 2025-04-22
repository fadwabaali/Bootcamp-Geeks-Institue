const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const QuestionOption = sequelize.define('QuestionOption', {
  questionId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Questions',
      key: 'id'
    }
  },
  optionId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Options',
      key: 'id'
    }
  }
});

module.exports = QuestionOption;
