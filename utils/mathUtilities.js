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
    problem: "10 - 25",
    answer: -15,
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

/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {object} The randomly generated math question
 */

let answerStreak = 0;

function getQuestion() {
  const question = Math.floor(Math.random() * problems.length);
  const problem = problems[question];
  const answer = problem.answer;
  return { problem, answer };
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */

function checkAnswer(question, answer) {
  if (question.answer === answer) {
    isCorrectAnswer();
  } else {
    inCorrectAnswer();
  }
  return;
}

function isCorrectAnswer(question, answer) {
  answerStreak++;
}

function inCorrectAnswer(question, answer) {
  return question.answer !== answer, answerStreak;
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
  inCorrectAnswer,
};
