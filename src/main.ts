import { Screen } from "./screens/Screen.ts";
import overworldScreen from "./screens/overworld/OverworldScreen.ts";


/* 
------------------------------------------------------------------------
Constants, state, and canvas variables
------------------------------------------------------------------------
*/

const FPS = 144;

const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.querySelector("#game-canvas")
);
const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

let gameInterval: number | null = null;
let lastTime = 0;
let deltaTime = 0;

const screenStack: Screen[] = [];

window.onload = start;
window.onresize = adjustCanvasSize;


/* 
------------------------------------------------------------------------
Game and canvas management functions
------------------------------------------------------------------------
*/

function adjustCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function render() {
  if (ctx === null) return;
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
  if (overworldScreen.init) {
    overworldScreen.init();
  }
  screenStack.push(overworldScreen);
  gameInterval = setInterval(update, 1000 / FPS);
}

function stop() {
  if (gameInterval !== null) {
    clearInterval(gameInterval);
  }
}
