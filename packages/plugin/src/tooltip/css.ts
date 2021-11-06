export function appendCss(cssString = '') {
  return `
    text {
      opacity: 1
    }
    ${cssString}
  `;
}
