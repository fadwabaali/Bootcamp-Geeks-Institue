const quizBox = document.getElementById('quiz-box');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const submitBtn = document.getElementById('submit-btn');
const finalScoreEl = document.getElementById('final-score');
const scoreDisplay = document.getElementById('score');

let questions = [];
let currentQuestion = 0;
let selectedOption = null;
let score = 0;

// 🧠 Fetch all questions from API
async function loadQuestions() {
  const res = await fetch('http://localhost:3000/api/quiz');
  questions = await res.json();
  displayQuestion();
}

function displayQuestion() {
  feedbackEl.textContent = '';
  selectedOption = null;

  const q = questions[currentQuestion];
  questionEl.textContent = q.question;

  optionsEl.innerHTML = '';
  q.Options.forEach((option, index) => {
    const optionEl = document.createElement('label');
    optionEl.className = 'border rounded px-4 py-2 cursor-pointer hover:bg-gray-100';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'option';
    radio.value = option.id;
    radio.className = 'mr-2';

    radio.addEventListener('change', () => {
      selectedOption = option.id;
    });

    optionEl.appendChild(radio);
    optionEl.append(option.optionText);
    optionsEl.appendChild(optionEl);
  });
}

submitBtn.addEventListener('click', () => {
  const current = questions[currentQuestion];

  if (!selectedOption) {
    feedbackEl.textContent = 'Please select an option!';
    feedbackEl.className = 'text-red-500';
    return;
  }

  const isCorrect = selectedOption == current.correctAnswer;

  if (isCorrect) {
    score++;
    feedbackEl.textContent = 'Correct!';
    feedbackEl.className = 'text-green-500';
  } else {
    feedbackEl.textContent = 'Wrong!';
    feedbackEl.className = 'text-red-500';
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      quizBox.classList.add('hidden');
      finalScoreEl.classList.remove('hidden');
      scoreDisplay.textContent = score;
    }
  }, 1000);
});

loadQuestions();
