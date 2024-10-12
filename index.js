const express = require("express");
const session = require("express-session");
const {
  getQuestion,
  isCorrectAnswer,
  inCorrectAnswer,
  checkAnswer,
  getStreak,
} = require("./utils/mathUtilities");
const app = express();
const port = 3000;

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const users = [
  {
    name: "Emily",
    streak: 15,
    date: "2024-01-01",
  },
  {
    name: "Liam",
    streak: 12,
    date: "2024-10-01",
  },
  {
    name: "Ava",
    streak: 9,
    date: "2024-05-21",
  },
  {
    name: "Ethan",
    streak: 6,
    date: "2024-06-15",
  },
  {
    name: "Sophia",
    streak: 6,
    date: "2024-04-02",
  },
  {
    name: "Jackson",
    streak: 5,
    date: "2024-09-04",
  },
  {
    name: "Mia",
    streak: 3,
    date: "2024-02-01",
  },
  {
    name: "Noah",
    streak: 3,
    date: "2024-08-18",
  },
  {
    name: "Isabella",
    streak: 2,
    date: "2024-03-29",
  },
];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static("public")); // To serve static files (e.g., CSS)

//Some routes required for full functionality are missing here. Only get routes should be required
app.get("/", (req, res) => {
  res.render("index", {
    answerStreak: req.session.streak,
  });
});

app.get("/newquiz", (req, res) => {
  req.session.streak = 0;
  const question = getQuestion();
  req.session.currentQuestion = question;
  res.render("quiz", {
    question: question.problem,
    answer: question.answer,
    answerStreak: req.session.streak,
  });
});

app.get("/quiz", (req, res) => {
  const question = getQuestion();
  req.session.currentQuestion = question;
  res.render("quiz", {
    question: question.problem,
    answer: question.answer,
    answerStreak: req.session.streak,
  });
});

app.get("/leaderboard", (req, res) => {
  const userStreak = req.session.streak || 0;
  const currentUser = {
    name: "User",
    streak: userStreak,
    currentDate: new Date().toISOString().split("T")[0],
  };
  const userUpdate = [...users.slice(0, 9), currentUser];
  res.render("leaderboard", {
    answerStreak: userStreak,
    users: userUpdate,
  });
});

app.get("/complete", (req, res) => {
  res.render("complete", {
    answerStreak: req.session.streak || 0,
  });
});

app.post("/leaderboard", (req, res) => {
  const { answerStreak } = req.body;
  console.log(`Answer streak: ${answerStreak}`);
});

app.post("/complete", (req, res) => {
  const { answerStreak } = req.body;
  console.log(`Answer streak: ${answerStreak}`);
});

//Handles quiz submissions.
app.post("/quiz", (req, res) => {
  const { answer } = req.body;

  if (!req.session.currentQuestion) {
    return res.redirect("/quiz");
  }

  const correctAnswer = req.session.currentQuestion.answer;
  console.log(`Users Answer: ${answer}, Correct Answer: ${correctAnswer}`);

  //answer will contain the value the user entered on the quiz page
  //Logic must be added here to check if the answer is correct, then track the streak and redirect properly
  if (answer.toString().trim() === correctAnswer.toString().trim()) {
    isCorrectAnswer(req);
    const newQuestion = getQuestion();
    req.session.currentQuestion = newQuestion;
    return res.redirect("/quiz");
  } else {
    inCorrectAnswer();
    return res.redirect("/complete");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
