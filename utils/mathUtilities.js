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
    problem: "10 / 25",
    answer: 0.4,
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

function getQuestion() {
  const question = Math.floor(Math.random() * problems.length);
  return problems[question];
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
  if (question.answer === answer) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getQuestion,
  isCorrectAnswer,
};
