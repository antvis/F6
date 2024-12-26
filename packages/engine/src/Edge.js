import Drawable from "./Drawable.js";

// Enum for line styles
const LineStyle = {
  SOLID: "solid",
  DASHED: "dashed",
  DOTTED: "dotted",
};

// Enum for connection points
const ConnectionPoint = {
  TOP: "top",
  RIGHT: "right",
  BOTTOM: "bottom",
  LEFT: "left",
};

class Edge extends Drawable {
  constructor({
    startNode,
    endNode,
    lineStyle = LineStyle.SOLID,
    lineWidth = 2,
    color = "#000000",
    bezier = false,
  } = {}) {
    super();
    this.startNode = startNode;
    this.endNode = endNode;
    this.lineStyle = lineStyle;
    this.lineWidth = lineWidth;
    this.color = color;
    this.bezier = bezier;
  }

  update(deltaTime) {
    // Update logic for the edge
    super.update(deltaTime);
  }

  draw(context) {
    if (!this.visible) return;
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;

    if (this.lineStyle === LineStyle.DASHED) {
      context.setLineDash([5, 5]);
    } else if (this.lineStyle === LineStyle.DOTTED) {
      context.setLineDash([1, 2]);
    } else {
      context.setLineDash([]);
    }

    const startPos = this.getConnectionPoint(this.startNode, this.startPoint);
    const endPos = this.getConnectionPoint(this.endNode, this.endPoint);

    context.beginPath();
    if (this.bezier) {
      const controlPoint1 = {
        x: startPos.x,
        y: startPos.y + (endPos.y - startPos.y) / 2,
      };
      const controlPoint2 = {
        x: endPos.x,
        y: startPos.y + (endPos.y - startPos.y) / 2,
      };
      context.moveTo(startPos.x, startPos.y);
      context.bezierCurveTo(
        controlPoint1.x,
        controlPoint1.y,
        controlPoint2.x,
        controlPoint2.y,
        endPos.x,
        endPos.y,
      );
    } else {
      context.moveTo(startPos.x, startPos.y);
      context.lineTo(endPos.x, endPos.y);
    }
    context.stroke();
    super.update(deltaTime);
  }

  getConnectionPoint(node, point) {
    switch (point) {
      case ConnectionPoint.TOP:
        return { x: node.x + node.width / 2, y: node.y };
      case ConnectionPoint.RIGHT:
        return { x: node.x + node.width, y: node.y + node.height / 2 };
      case ConnectionPoint.BOTTOM:
        return { x: node.x + node.width / 2, y: node.y + node.height };
      case ConnectionPoint.LEFT:
        return { x: node.x, y: node.y + node.height / 2 };
      default:
        return { x: node.x, y: node.y };
    }
  }

  setLineStyle(lineStyle) {
    this.lineStyle = lineStyle;
  }

  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth;
  }

  setColor(color) {
    this.color = color;
  }

  setBezier(bezier) {
    this.bezier = bezier;
  }
}

export { Edge, LineStyle, ConnectionPoint };
