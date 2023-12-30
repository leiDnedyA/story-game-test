import { GameObject } from "./GameObject.ts";

function render(gameObjects: GameObject[], ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "blue";
  for (const gameObject of gameObjects) {
    ctx.fillRect(
      gameObject.x,
      gameObject.y,
      gameObject.height,
      gameObject.width
    );
  }
}

export { render };
