export default function getHtml(className, content) {
  return `
  <div class=${className}> 
    ${content}
  </div>`;
}
