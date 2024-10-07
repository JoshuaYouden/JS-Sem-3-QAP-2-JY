const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
  test("Gets a random multiplication, division, subtraction or addition question", () => {
    expect(getQuestion()).toBeTruthy();
  });
});

describe("Tests for isCorrectAnswer", () => {
  test("Parses the provided question and gets whether or not the provided answer is correct", () => {
    expect(isCorrectAnswer()).toBeTruthy();
  });
});

describe("Tests for incorrectAnswer", () => {
  test("Parses the provided question and gets whether or not the provided answer is incorrect", () => {
    expect(isCorrectAnswer()).toBeFalsy();
  });
});
