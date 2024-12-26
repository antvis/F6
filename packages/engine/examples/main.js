import {
  Node,
  Edge,
  LineStyle,
  ConnectionPoint,
  ArrowPosition,
} from "../packages/engine/src/index.js";

function main() {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const nodeA = new Node({
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    fill: "blue",
    stroke: "red",
    lineWidth: 2,
  });
  const nodeB = new Node({
    x: 300,
    y: 200,
    width: 100,
    height: 100,
    fill: "green",
    stroke: "black",
    lineWidth: 1,
  });

  const edge = new Edge({
    startNode: nodeA,
    endNode: nodeB,
    startPoint: ConnectionPoint.RIGHT,
    endPoint: ConnectionPoint.LEFT,
    lineStyle: LineStyle.DASHED,
    lineWidth: 2,
    color: "purple",
    bezier: true,
    arrowPosition: ArrowPosition.BOTH,
  });

  function update(deltaTime) {
    nodeA.update(deltaTime);
    nodeB.update(deltaTime);
    edge.update(deltaTime);
  }

  function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    nodeA.draw(context);
    nodeB.draw(context);
    edge.draw(context);
  }

  function loop(timestamp) {
    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    update(deltaTime);
    draw();

    requestAnimationFrame(loop);
  }

  let lastTimestamp = 0;
  requestAnimationFrame(loop);
}

main();
