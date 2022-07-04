import { registerTag } from '@antv/f-engine';
import { Renderer as WebglRenderer } from '@antv/g-mobile-webgl';
import {
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  Plugin as Plugin3D,
  SphereGeometry,
} from '@antv/g-plugin-3d';
import React, { useEffect } from 'react';
import {
  BaseNode,
  Canvas,
  ForceLayout,
  Graph,
  jsx,
  registerLayout,
  registerNode,
  Util,
} from '../../../src';

import data from './data';

export default () => {
  const ref = React.useRef(null);
  const height = window.innerHeight - 32; // demos padding
  const width = window.innerWidth - 32;

  const colorPalette = [
    '#5B8FF9',
    '#CDDDFD',
    '#61DDAA',
    '#CDF3E4',
    '#65789B',
    '#F6BD16',
    '#7262fd',
    '#78D3F8',
    '#9661BC',
    '#F6903D',
    '#008685',
    '#F08BB4',
  ];

  registerLayout('force', ForceLayout);
  useEffect(() => {
    const context = Util.createContext(ref.current, width, height, 'webgl');
    const renderer = new WebglRenderer();
    renderer.registerPlugin(new Plugin3D());
    const plugin = renderer.getPlugin('device-renderer');
    const canvasRef = { current: null };

    let sphereGeometry, material;

    registerTag('mesh', Mesh);

    class Node3D extends BaseNode {
      render() {
        if (!sphereGeometry || !material) return null;
        return (
          <mesh
            style={{
              fill: colorPalette[Math.floor(Math.random() * colorPalette.length)],
              opacity: 1,
              geometry: sphereGeometry,
              material,
              cursor: 'pointer',
              z: Math.random() * 100,
            }}
          ></mesh>
        );
      }
    }

    registerNode('3d', Node3D);

    const light = new DirectionalLight({
      style: {
        fill: 'white',
        direction: [-1, 0, 1],
      },
    });

    const { props } = (
      <Canvas
        width={width}
        height={height}
        pixelRatio={2}
        context={context}
        renderer={renderer}
        ref={canvasRef}
      >
        <Graph
          fitCenter={false}
          fitview={false}
          data={{}}
          linkCenter={true}
          modes={{
            default: ['drag-node'],
          }}
          layout={{
            type: 'force',
            // preventOverlap: true,
            // alphaDecay: 0,
          }}
          onGraphReady={(graph) => {
            const device = plugin.getDevice();
            // create a sphere geometry
            sphereGeometry = new SphereGeometry(device, {
              radius: 10,
              latitudeBands: 32,
              longitudeBands: 32,
            });
            // create a material with Phong lighting model
            material = new MeshPhongMaterial(device, {
              shininess: 30,
            });
            graph.changeData(data);
          }}
        ></Graph>
      </Canvas>
    );
    const graph = new Canvas(props);
    graph.render();
    graph.canvas.appendChild(light);
  }, []);
  // }

  return <div ref={ref}></div>;
};
