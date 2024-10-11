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

const users = [
  {
    name: "Emily",
    streak: 2,
    date: "2024-01-01",
  },
  {
    name: "Liam",
    streak: 6,
    date: "2024-10-01",
  },
  {
    name: "Ava",
    streak: 3,
    date: "2024-05-21",
  },
  {
    name: "Ethan",
    streak: 3,
    date: "2024-06-15",
  },
  {
    name: "Sophia",
    streak: 15,
    date: "2024-04-02",
  },
  {
    name: "Jackson",
    streak: 5,
    date: "2024-09-04",
  },
  {
    name: "Mia",
    streak: 12,
    date: "2024-02-01",
  },
  {
    name: "Noah",
    streak: 9,
    date: "2024-08-18",
  },
  {
    name: "Isabella",
    streak: 6,
    date: "2024-03-29",
  },
  {
    name: "Oliver",
    streak: 14,
    date: "2024-07-05",
  },
];

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
  res.render("leaderboard", { answerStreak: getStreak(), users: users });
});

app.get("/complete", (req, res) => {
  res.render("complete", { answerStreak: getStreak() });
});

app.post("/leaderboard", (req, res) => {
  const { answerStreak } = req.body;
  const { users } = req.body;
  // const users = users;
  console.log(`Answer streak: ${answerStreak}`);
});

app.post("/complete", (req, res) => {
  const { answerStreak } = req.body;
  console.log(`Answer streak: ${answerStreak}`);
});

//Handles quiz submissions.
app.post("/quiz", (req, res) => {
  const { answer } = req.body;
  console.log(`Answer: ${answer}`);
  const question = getQuestion();
  const correct = isCorrectAnswer(question, answer);
  const notCorrect = inCorrectAnswer(question, answer);

  //answer will contain the value the user entered on the quiz page
  //Logic must be added here to check if the answer is correct, then track the streak and redirect properly
  if (answer === question.answer) {
    isCorrectAnswer();
  } else {
    inCorrectAnswer();
    //By default we'll just redirect to the homepage again.
    res.redirect("/");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
