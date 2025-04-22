const { Question, Option } = require('../models');

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: Option,
    });

    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
