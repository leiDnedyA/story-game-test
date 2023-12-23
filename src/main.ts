const FPS = 20;
const BALL_SPEED = .05;
const BALL_LENGTH = 10;

const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

let gameInterval: number | null = null;
let lastTime = 0;
let deltaTime = 0;

let ballPosition = {
  x: 0,
  y: 0
};

let ballIsReversed = {
  x: false,
  y: false
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(ballPosition.x, ballPosition.y, BALL_LENGTH, BALL_LENGTH);
}

function update() {
  const now = Date.now();
  deltaTime = now - lastTime;
  lastTime = now;

  const xSpeed = ballIsReversed.x ? -BALL_SPEED : BALL_SPEED;
  const ySpeed = ballIsReversed.y ? -BALL_SPEED : BALL_SPEED;
  
  ballPosition.x += xSpeed * deltaTime;
  ballPosition.y += ySpeed * deltaTime;

  if (ballPosition.x + BALL_LENGTH > canvas.width) {
    ballIsReversed.x = true;
  }
  if (ballPosition.y + BALL_LENGTH > canvas.height) {
    ballIsReversed.y = true;
  }

  if (ballPosition.x < 0) {
    ballIsReversed.x = false;
  }
  if (ballPosition.y < 0) {
    ballIsReversed.y = false;
  }

  render();
}

function start() {
  lastTime = Date.now();
  gameInterval = setInterval(update, 1000 / FPS);
}

function stop() {
  if (gameInterval !== null) {
    clearInterval(gameInterval);
  }
}

window.onload = start;
