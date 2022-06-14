// import { getGlobalContext } from '../service';

// export class Layout {
//   state = {};

//   cfg = null;

//   setLayoutCfg = (cfg) => {
//     this.cfg = cfg;
//   };

//   getLayout() {
//     const layout = this.cfg;
//     if (!layout) {
//       return null;
//     }
//     if (typeof layout === 'function') {
//       return layout;
//     }
//     if (!layout.type) {
//       layout.type = 'dendrogram';
//     }
//     if (!layout.direction) {
//       layout.direction = 'TB';
//     }
//     // if (layout.radial) {
//     //   return (data: any) => {
//     //     const layoutData = Hierarchy[layout.type](data, layout);
//     //     radialLayout(layoutData);
//     //     return layoutData;
//     //   };
//     // }
//     return (data: any) => Hierarchy[layout.type](data, layout);
//   }

//   prevattrs = {};

//   layout() {
//     const tree = clone(this.node.getTree());

//     const layout = this.getLayout();
//     const layoutData = layout(tree, this.cfg);

//     const nodePayload = [];

//     traverseTree(layoutData, (node) => {
//       nodePayload.push({
//         id: node.id,
//         changes: {
//           x: node.x,
//           y: node.y,
//         },
//       });

//       return true;
//     });

//     node.init(layoutData);

//     // this.prevattrs = animatePayload;
//   }

//   @computed()
//   animate() {
//     // animate.addMany(this.prevattrs);
//   }

//   getState() {}
// }

// export const treeLayout = new Layout();
