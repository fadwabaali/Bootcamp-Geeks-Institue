const express = require('express');
const router = express.Router();
const quizController = require('../controllers/Quiz.controller');

router.get('/quiz', quizController.getAllQuestions);

module.exports = router;
