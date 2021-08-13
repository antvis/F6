import compute from 'css-layout';

export function computeLayout(styleNode) {
  const stack = [styleNode];
  while (stack.length) {
    const node = stack.pop();
    node.children = node.originChildren.filter((child) => {
      if (child.style.display !== 'none') {
        stack.push(child);
        return true;
      }
      return false;
    });
  }
  compute(styleNode);
}
