import { GameObject } from "./GameObject.ts";

function overworldRender(gameObjects: GameObject[], ctx: CanvasRenderingContext2D) {
  for (const gameObject of gameObjects) {
    ctx.fillStyle = gameObject.color;
    ctx.fillRect(
      gameObject.x,
      gameObject.y,
      gameObject.height,
      gameObject.width
    );
  }
}

export { overworldRender };
