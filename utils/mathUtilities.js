const problems = [
  {
    problem: "10 + 25",
    answer: 35,
  },
  {
    problem: "100 + 50",
    answer: 150,
  },
  {
    problem: "45 + 25",
    answer: 70,
  },
  {
    problem: "25 + 25",
    answer: 50,
  },
  {
    problem: "25 - 10",
    answer: 15,
  },
  {
    problem: "100 - 50",
    answer: 50,
  },
  {
    problem: "45 - 25",
    answer: 20,
  },
  {
    problem: "25 - 25",
    answer: 0,
  },
  {
    problem: "10 * 25",
    answer: 250,
  },
  {
    problem: "25 * 2",
    answer: 50,
  },
  {
    problem: "10 * 10",
    answer: 100,
  },
  {
    problem: "10 * 5",
    answer: 50,
  },
  {
    problem: "250 / 25",
    answer: 10,
  },
  {
    problem: "150 / 10",
    answer: 15,
  },
  {
    problem: "35 / 5",
    answer: 7,
  },
  {
    problem: "100 / 20",
    answer: 5,
  },
];

let answerStreak = 0;

/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {object} The randomly generated math question
 */

function getQuestion() {
  const question = Math.floor(Math.random() * problems.length);
  const streak = answerStreak;
  return problems[(question, streak)];
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */

function isCorrectAnswer(question, answer) {
  answerStreak++;
  console.log(`Correct! Your streak is now ${answerStreak}`);
}

function inCorrectAnswer(question, answer) {
  console.log(`Incorrect! Your streak is now ${answerStreak}`);
}

function checkAnswer(question, answer) {
  if (problems.answer === answer) {
    isCorrectAnswer();
  } else {
    inCorrectAnswer();
  }
  return;
}

function getStreak() {
  return answerStreak;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
  inCorrectAnswer,
  checkAnswer,
  getStreak,
};
