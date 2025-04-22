const { sequelize, Question, Option } = require('./models');

(async () => {
  try {
    await sequelize.sync({ force: true }); // Reset and recreate all tables

    // Reusable function to create question and options
    async function createQuestionWithOptions(questionText, optionsArray, correctIndex) {
      const question = await Question.create({ question: questionText });
      const options = await Option.bulkCreate(
        optionsArray.map(text => ({ optionText: text, questionId: question.id }))
      );
      question.correctAnswer = options[correctIndex].id;
      await question.save();
    }

    await createQuestionWithOptions(
      'Which HTML tag is used to create a hyperlink?',
      ['<a>', '<link>', '<href>'],
      0
    );

    await createQuestionWithOptions(
      'Which keyword is used to declare a variable in JavaScript?',
      ['var', 'int', 'define'],
      0
    );

    await createQuestionWithOptions(
      'Which CSS property controls text size?',
      ['font-size', 'text-style', 'font-weight'],
      0
    );

    await createQuestionWithOptions(
      'Which method converts a JSON string into a JavaScript object?',
      ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()'],
      0
    );

    await createQuestionWithOptions(
      'Which one is a JavaScript framework?',
      ['React', 'Django', 'Laravel'],
      0
    );

    console.log('Coding questions seeded successfully.');
    process.exit();
  } catch (err) {
    console.error('Error seeding questions:', err);
    process.exit(1);
  }
})();
