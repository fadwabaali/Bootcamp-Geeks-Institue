const sequelize = require('../config/db');
const Question = require('./questions.module');
const Option = require('./options.module');
const QuestionOption = require('./questionsoptions.module');

Question.belongsToMany(Option, { through: QuestionOption, foreignKey: 'questionId' });
Option.belongsToMany(Question, { through: QuestionOption, foreignKey: 'optionId' });

module.exports = {
  sequelize,
  Question,
  Option,
  QuestionOption
};
