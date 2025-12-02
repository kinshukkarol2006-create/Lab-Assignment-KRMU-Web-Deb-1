const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hypertext Markup Language",
      "HighText Machine Language",
      "None",
    ],
    answer: "b",
    hint: "It is the standard language for creating web pages.",
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "a",
    hint: "It starts with 'i' and ends with 'g'.",
  },
  {
    question: "Which property in CSS is used to change text color?",
    options: ["text-style", "font-color", "color", "text-color"],
    answer: "c",
    hint: "Shortest option.",
  },
  {
    question: "Which layout in CSS uses rows and columns?",
    options: ["Flexbox", "CSS Grid", "Float", "Block Model"],
    answer: "b",
    hint: "Not flexbox.",
  },
  {
    question: "Which keyword declares block-scoped variables in JavaScript?",
    options: ["var", "let", "const", "define"],
    answer: "b",
    hint: "Introduced in ES6.",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Digital Ordinance Model",
      "Display Object Mode",
    ],
    answer: "a",
    hint: "It's used to access and modify HTML.",
  },
  {
    question: "Which method logs messages to the console?",
    options: ["console.log()", "print()", "log.console()", "display()"],
    answer: "a",
    hint: "Starts with console.",
  },
];

function getHighScore() {
  return localStorage.getItem("highScore") || 0;
}

function saveHighScore(score) {
  localStorage.setItem("highScore", score);
}

function runQuiz() {
  let score = 0;
  const total = quizQuestions.length;

  alert(
    " Welcome to the Advanced Web Development Quiz! \n\nTopics: HTML, CSS, JavaScript\nYou have 10 seconds per question.\nPress OK to start!"
  );

  for (let i = 0; i < total; i++) {
    let q = quizQuestions[i];

    let mcqText =
      `${q.question}\n\n` +
      `A: ${q.options[0]}\n` +
      `B: ${q.options[1]}\n` +
      `C: ${q.options[2]}\n` +
      `D: ${q.options[3]}\n\n` +
      "⚠ Enter a, b, c, or d:";

    let userAnswer = "";
    let answered = false;

    const timer = setTimeout(() => {
      if (!answered) {
        alert(" Time's up!");
        userAnswer = null;
        answered = true;
      }
    }, 10000);

    userAnswer = prompt(mcqText);

    answered = true;
    clearTimeout(timer);

    if (userAnswer === null) {
      alert(" Quiz stopped.\nFinal Score: " + score + "/" + total);
      return;
    }

    userAnswer = userAnswer.trim().toLowerCase();

    if (userAnswer === q.answer) {
      score++;
      alert(" Correct!");
    } else {
      alert(
        ` Incorrect!\nCorrect Answer: ${q.answer.toUpperCase()}\n Hint: ${
          q.hint
        }`
      );
    }
  }
  e;
  const highScore = getHighScore();

  let message = ` Quiz Complete!\nYour Score: ${score}/${total}`;

  if (score === total) {
    message += "\n PERFECT SCORE! You're a Web Dev Pro!";
  } else if (score > total / 2) {
    message += "\n Good Job! You know your basics!";
  } else {
    message += "\n Keep practicing! You’ll get better!";
  }

  if (score > highScore) {
    saveHighScore(score);
    message += `\n\n NEW HIGH SCORE: ${score}!`;
  } else {
    message += `\n\n High Score: ${highScore}`;
  }

  alert(message);

  let again = confirm(" Do you want to play again?");
  if (again) {
    runQuiz();
  }
}
runQuiz();
