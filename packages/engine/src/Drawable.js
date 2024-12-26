class Drawable {
  constructor({
    x = 0,
    y = 0,
    z = 0,
    width = 0,
    height = 0,
    visible = true,
  } = {}) {
    if (new.target === Drawable) {
      throw new TypeError("Cannot construct Drawable instances directly");
    }
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = width;
    this.height = height;
    this.visible = visible;
    this.children = [];
    this.parent = null;
  }

  update(deltaTime) {
    // Placeholder for update logic
    // This method should be overridden by subclasses
    this.children.forEach((child) => child.update(deltaTime));
  }

  draw(context) {
    // Placeholder for draw logic
    // This method should be overridden by subclasses
    if (!this.visible) return;
    this.renderChildren(context);
  }

  addChild(child) {
    if (child instanceof Drawable) {
      child.parent = this;
      this.children.push(child);
    } else {
      throw new TypeError("Child must be an instance of Drawable");
    }
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      child.parent = null;
      this.children.splice(index, 1);
    }
  }

  renderChildren(context) {
    this.children.forEach((child) => child.draw(context));
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  setVisible(visible) {
    this.visible = visible;
  }

  isVisible() {
    return this.visible;
  }

  getRelativePosition() {
    return { x: this.x, y: this.y, z: this.z };
  }

  getAbsolutePosition() {
    let x = this.x;
    let y = this.y;
    let z = this.z;
    let current = this.parent;

    while (current) {
      x += current.x;
      y += current.y;
      z += current.z;
      current = current.parent;
    }

    return { x, y, z };
  }

  getParent() {
    return this.parent;
  }
}

export default Drawable;
