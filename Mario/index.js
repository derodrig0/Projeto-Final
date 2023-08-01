const score = document.querySelector(".score");
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const imgGameOver = document.querySelector(".imgGameOver");
const btnIniciar = document.querySelector(".btnIniciar");

let gameOver = true;
let countScore = 0;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
  
  if (!gameOver) {
    countScore++;
  }
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 112) {
    gameOver = true;

    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    imgGameOver.style.display = "block";
    btnIniciar.style.display = "block";

    clearInterval(loop);
  }
  if (countScore > 0 && !gameOver) {
    score.innerHTML = `SCORE: ${countScore}`;
  }else if (countScore == 0) {
    score.innerHTML = `SCORE: 0`;
  }else if (gameOver){
    countScore -= 1;
    score.innerHTML = `SCORE: ${countScore}`;
  }
  gameOver = false;
}, 10);

btnIniciar.addEventListener('click', () => window.location.reload());
document.addEventListener("keydown", jump);
document.addEventListener("touchstart", jump);
