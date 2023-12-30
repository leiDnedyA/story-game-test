import { Screen } from "../Screen.ts";
import { GameObject } from "./GameObject.ts";
import { overworldRender } from "./OverworldView.ts";

const PLAYER_SPEED = 0.25;
const PLAYER_WIDTH = 30;
const PLAYER_HEIGHT = 30;

const player: GameObject = {
  x: 0,
  y: 0,
  color: "blue",
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT,
  speed: PLAYER_SPEED,
};

const npc: GameObject = {
  x: 200,
  y: 200,
  color: "#c9c",
  width: PLAYER_WIDTH,
  height: PLAYER_HEIGHT,
  speed: 0.05,
  xDirection: 1,
  yDirection: 1,
  lastDirChange: 0,
  dirChangeInterval: 500,
  update: function (deltaTime: number) {
    const now = Date.now();
    if (now - this.lastDirChange > this.dirChangeInterval) {
      this.lastDirChange = now;
      if (Math.random() > 0.9) {
        this.xDirection = randomDirection();
      }
      if (Math.random() > 0.9) {
        this.yDirection = randomDirection();
      }
      if (Math.random() > 0.6) {
        this.xDirection = 0;
        this.yDirection = 0;
      }
    }
    this.x += this.speed * this.xDirection * deltaTime;
    this.y += this.speed * this.yDirection * deltaTime;
  },
};

const gameObjects = [player, npc];

const keysDown: { [key: string]: boolean } = {
  W: false,
  A: false,
  S: false,
  D: false,
};

function randomDirection() {
  return Math.floor(Math.random() * 10) % 3;
}

function handleKeydown(e: KeyboardEvent) {
  const key = e.key.toUpperCase();
  console.log(key);
  if (keysDown.hasOwnProperty(key)) {
    keysDown[key] = true;
  }
}

function handleKeyup(e: KeyboardEvent) {
  const key = e.key.toUpperCase();
  console.log(key);
  if (keysDown.hasOwnProperty(key)) {
    keysDown[key] = false;
  }
}

function update(deltaTime: number, canvas: HTMLCanvasElement) {
  if (keysDown.W === true) {
    player.y -= PLAYER_SPEED * deltaTime;
  }
  if (keysDown.S === true) {
    player.y += PLAYER_SPEED * deltaTime;
  }
  if (keysDown.A === true) {
    player.x -= PLAYER_SPEED * deltaTime;
  }
  if (keysDown.D === true) {
    player.x += PLAYER_SPEED * deltaTime;
  }
  npc.update(deltaTime);
}

function render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  overworldRender(gameObjects, ctx);
}

function init() {
  window.onkeydown = handleKeydown;
  window.onkeyup = handleKeyup;
}

const overworldScreen: Screen = {
  update: update,
  render: render,
  init: init,
};

export default overworldScreen;
