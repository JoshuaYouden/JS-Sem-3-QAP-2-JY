const {
  isCorrectAnswer,
  getQuestion,
  checkAnswer,
  inCorrectAnswer,
} = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
  test("Gets a random multiplication, division, subtraction or addition question", () => {
    const question = getQuestion();
    expect(question).toHaveProperty("problem");
    expect(question).toHaveProperty("answer");
  });
});

describe("Tests for isCorrectAnswer", () => {
  test("Parses the provided question and gets whether or not the provided answer is correct", () => {
    const question = { problem: "10 + 25", answer: 35 };
    const userAnswer = "35";
    const result = checkAnswer(question, userAnswer);
    expect(result).toBeTruthy();
  });
});

describe("Tests for incorrectAnswer", () => {
  test("Parses the provided question and gets whether or not the provided answer is incorrect", () => {
    const question = { problem: "10 + 25", answer: 35 };
    const userAnswer = "40";
    const result = checkAnswer(userAnswer);
    expect(result).toBeFalsy();
  });
});
