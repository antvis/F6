// import { CanvasRenderer, SvgRenderer, WebglRenderer } from '@antv/f-engine';

export function createContext(container, width, height, contextType = '2d'): RenderingContext {
  let containerEl = container;
  if (container !== null && typeof container === 'string') {
    containerEl = document.getElementById(container);
  }
  const canvasEl = document.createElement('canvas');
  canvasEl.style.display = 'block';
  canvasEl.style.width = width;
  canvasEl.style.height = height;
  canvasEl.width = width;
  canvasEl.height = height;
  containerEl.appendChild(canvasEl);

  return canvasEl.getContext(contextType);
}

// function isCanvas2DContext(context) {
//   return context instanceof CanvasRenderingContext2D;
// }

// function isWebglContext(context) {
//   return context instanceof WebGLRenderingContext;
// }
// function isWebgl2Context(context) {
//   return context instanceof WebGL2RenderingContext;
// }

// function genRendererByContext(context) {
//   if (isCanvas2DContext(context)) {
//     return new CanvasRenderer();
//   }

//   if (isWebglContext(context) || isWebgl2Context(context)) {
//     return new WebglRenderer();
//   }
// }

// export const genCanvasCfg = (cfg) => {
//   const { container, width, height, context, pixelRatio, renderer } = cfg || {};
//   const canvasCfg = { width, height, context, pixelRatio };

//   if (window && document) {
//     let containerEl = container;
//     if (container !== null && typeof container === 'string') {
//       containerEl = document.getElementById(container);
//     }

//     if (!containerEl || !(container instanceof HTMLDivElement)) {
//       throw new Error('invalid container');
//     }
//     let canvas;
//     if (renderer !== 'svg') {
//       canvas = createCanvas(container, width, height);
//     }

//     let renderInstance;
//     let context;
//     switch (renderer) {
//       case 'svg':
//         renderInstance = new SvgRenderer();
//         break;
//       case 'webgl':
//         renderInstance = new WebglRenderer();
//         context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
//         break;
//       case 'webgl2':
//         renderInstance = new WebglRenderer();
//         context = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2');
//         break;
//       default:
//         renderInstance = new CanvasRenderer();
//         context = canvas.getContext('2d');
//     }
//     return {
//       ...canvasCfg,
//       context,
//       renderer: renderInstance,
//     };
//   }

//   if (!context) {
//     throw new Error('invalid context');
//   }

//   return {
//     ...canvasCfg,
//     renderer: genRendererByContext(context),
//   };
// };

// export const createContext = (width = '300px', height = '225px') => {
//   const canvasEl = document.createElement('canvas');
//   canvasEl.style.display = 'block';
//   canvasEl.style.width = width;
//   canvasEl.style.height = height;
//   document.body.appendChild(canvasEl);
//   const context = canvasEl.getContext('2d');
//   return context;
// };
