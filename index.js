const express = require("express");
const {
  getQuestion,
  isCorrectAnswer,
  inCorrectAnswer,
  checkAnswer,
  getStreak,
} = require("./utils/mathUtilities");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static("public")); // To serve static files (e.g., CSS)

//Some routes required for full functionality are missing here. Only get routes should be required
app.get("/", (req, res) => {
  res.render("index", {
    streak: getStreak(),
  });
});

app.get("/quiz", (req, res) => {
  res.render("quiz", {
    question: getQuestion(),
    correct: isCorrectAnswer(),
    notCorrect: inCorrectAnswer(),
    check: checkAnswer(),
    answerStreak: getStreak(),
  });
});

app.get("/leaderboard", (req, res) => {
  res.render("leaderboard");
});

app.get("/complete", (req, res) => {
  res.render("complete", { answerStreak: getStreak() });
});

//Handles quiz submissions.
app.post("/quiz", (req, res) => {
  const { answer } = req.body;
  console.log(`Answer: ${answer}`);
  const question = getQuestion();
  const correct = isCorrectAnswer(question, answer);
  const check = checkAnswer(question, answer);
  const incorrect = inCorrectAnswer(question, answer);
  if (check === inCorrectAnswer(question, answer)) {
    res.render("complete", { streak: getStreak() });
  }

  //answer will contain the value the user entered on the quiz page
  //Logic must be added here to check if the answer is correct, then track the streak and redirect properly
  if (check === correct) {
    isCorrectAnswer();
    res.render("quiz", { question: getQuestion(), answerStreak: getStreak() });
  } else {
    if (check === incorrect) {
      inCorrectAnswer();
      res.render("complete", { streak: 0 });
    }
    //By default we'll just redirect to the homepage again.
    res.redirect("/");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
