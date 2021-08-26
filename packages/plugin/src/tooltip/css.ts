export let css = `
  .f6-component-tooltip {
    position: absolute;
    width: 200;
    border: 1 solid #e2e2e2;
    border-radius: 4;
    font-size: 12;
    color: #545454;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10 8;
    box-shadow:  0 0 10 rgb(174, 174, 174);
  }

  .f6-component-tooltip div{
    height: 20;
  }
  
  .tooltip-type {
    padding: 0;
    margin: 0;
  }
  .tooltip-id {
    color: #531dab;
  }
`;

export function appendCss(cssString) {
  css += cssString || '';
  return css;
}
