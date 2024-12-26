import Drawable from "./Drawable.js";

class Node extends Drawable {
  constructor({
    x = 0,
    y = 0,
    z = 0,
    width = 0,
    height = 0,
    fill = "#FFFFFF",
    stroke = "#000000",
    lineWidth = 1,
    collapsed = false,
    visible = true,
  } = {}) {
    super({ x, y, z, width, height, visible });
    this.fill = fill;
    this.stroke = stroke;
    this.lineWidth = lineWidth;
    this.collapsed = collapsed;
  }

  update(deltaTime) {
    // Update logic for the node
    super.update(deltaTime);
  }

  draw(context) {
    if (!this.visible) return;

    // Draw the node
    context.fillStyle = this.fill;
    context.strokeStyle = this.stroke;
    context.lineWidth = this.lineWidth;

    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
    context.stroke();

    // Draw the border with dashed red line
    context.strokeStyle = "rgba(255, 0, 0, 0.2)";
    context.lineWidth = 1;
    context.setLineDash([5, 5]);

    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.stroke();

    // Reset line dash
    context.setLineDash([]);

    // Draw connection points
    this.drawConnectionPoint(context, this.x + this.width / 2, this.y); // Top
    this.drawConnectionPoint(
      context,
      this.x + this.width / 2,
      this.y + this.height,
    ); // Bottom
    this.drawConnectionPoint(context, this.x, this.y + this.height / 2); // Left
    this.drawConnectionPoint(
      context,
      this.x + this.width,
      this.y + this.height / 2,
    ); // Right

    super.draw(context);
  }

  drawConnectionPoint(context, x, y) {
    context.fillStyle = "black";
    context.beginPath();
    context.arc(x, y, 1.5, 0, Math.PI * 2);
    context.fill();
  }

  setFill(fill) {
    this.fill = fill;
  }

  setStroke(stroke) {
    this.stroke = stroke;
  }

  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth;
  }

  setCollapsed(collapsed) {
    this.collapsed = collapsed;
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  isCollapsed() {
    return this.collapsed;
  }
}

export default Node;
