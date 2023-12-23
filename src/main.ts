import ballScreen from "./screens/BallScreen.ts";

const FPS = 144;

const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

let gameInterval: number | null = null;
let lastTime = 0;
let deltaTime = 0;

const screenStack = [];

function adjustCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const screen of screenStack) {
    screen.render(ctx, canvas);
  }
}


function update() {
  const now = Date.now();
  deltaTime = now - lastTime;
  lastTime = now;

  for (const screen of screenStack) {
    screen.update(deltaTime, canvas);
  }

  render();
}

function start() {
  adjustCanvasSize();
  lastTime = Date.now();
  screenStack.push(ballScreen);
  gameInterval = setInterval(update, 1000 / FPS);
}

function stop() {
  if (gameInterval !== null) {
    clearInterval(gameInterval);
  }
}

window.onload = start;
window.onresize = adjustCanvasSize;
