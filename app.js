let num1, num2;
let score = 0;
let level = 1;
let streak = 0;

function generateQuestion() {
  let max = level * 10;

  num1 = Math.floor(Math.random() * max) + 1;
  num2 = Math.floor(Math.random() * max) + 1;

  document.getElementById("question").innerText = `${num1} × ${num2}`;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const userAnswer = Number(document.getElementById("answer").value);
  const correct = num1 * num2;

  if (userAnswer === correct) {
    streak++;
    score += 10;

    if (streak % 5 === 0) {
      level++;
    }

    showResult("✅ Correct!", "green");
  } else {
    streak = 0;
    showResult(`❌ Wrong! Answer: ${correct}`, "red");
  }

  updateUI();
}

function nextQuestion() {
  generateQuestion();
}

function updateUI() {
  document.getElementById("score").innerText = score;
  document.getElementById("level").innerText = level;
}

function showResult(msg, color) {
  const el = document.getElementById("result");
  el.innerText = msg;
  el.style.color = color;
}

generateQuestion();
