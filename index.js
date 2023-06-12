const holes = document.querySelectorAll(".hole");
const mole = document.querySelector(".mole");
const restart = document.getElementById("restart");
const timeCounter = document.getElementById("time");
const scoreCounter = document.getElementById("score");

let score = 0;
let currentHole = 0;
let isLocked = false;
let currentTime = 10;
function showMole() {
  holes.forEach((hole) => {
    hole.classList.remove("mole");
  });
  isLocked = false;
  let randomHole = holes[Math.floor(Math.random() * 9)];

  randomHole.classList.add("mole");

  currentHole = randomHole.id;
}

function start() {
  score = 0;
  currentTime = 10;
  moleTimer = setInterval(showMole, 300);
  timeTimer = setInterval(countTime, 1000);

  timeCounter.innerText = currentTime;
  scoreCounter.innerText = score;
}

start();
// Hit the mole

holes.forEach((hole) => {
  hole.addEventListener("click", () => {
    if (hole.id == currentHole) {
      if (isLocked) return;

      score++;
      scoreCounter.innerText = score;
      hole.classList.remove("mole");
      isLocked = true;
    }
  });
});

function countTime() {
  currentTime--;
  timeCounter.innerText = currentTime;

  if (currentTime == 0) {
    clearInterval(timeTimer);
    clearInterval(moleTimer);
    alert("Game ended! Your score is: " + score);
  }
}

function restartGame() {
  clearInterval(timeTimer);
  clearInterval(moleTimer);
  start();
}

restart.addEventListener("click", restartGame);