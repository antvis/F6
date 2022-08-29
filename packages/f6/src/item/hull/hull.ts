import { HullCfg } from '../../types';
import { Item } from '../base/item';
import { ItemManger } from '../base/manager';
import { parsePathString } from '@antv/path-util';
import { getClosedSpline, paddedHull, roundedHull } from '../../utils/path';

import { genBubbleSet } from './bubbleset';
import { genConvexHull } from './convexHull';
import { computed, makeObservable } from 'mobx';

export class Hull extends Item<HullCfg> {
  graph = null;
  constructor(graph, model) {
    super();
    this.model = { ...model };
    this.graph = graph;
    makeObservable(this, {
      nodeSize: computed,
      padding: computed,
      bubbleCfg: computed,
      hullType: computed,
      path: computed,
    });
  }

  get type() {
    return 'hull';
  }

  get nodeSize() {
    const { members } = this.model;
    return members.length && this.graph.findById(members[0]).getBBox().width / 2;
  }

  get padding() {
    const { padding } = this.model;
    return padding > 0 ? padding + this.nodeSize : 10 + this.nodeSize;
  }

  get bubbleCfg() {
    return {
      nodeR0: this.padding - this.nodeSize,
      nodeR1: this.padding - this.nodeSize,
      morphBuffer: this.padding - this.nodeSize,
    };
  }

  get hullType() {
    let { members, type } = this.model;
    if (members.length < 3) {
      type = 'round-convex';
    }
    if (type !== 'round-convex' && type !== 'smooth-convex' && type !== 'bubble') {
      console.warn(
        'The hull type should be either round-convex, smooth-convex or bubble, round-convex is used by default.',
      );
      type = 'round-convex';
    }
    return type;
  }

  calcPath() {
    let contour, path, hull;
    const { members = [], nonMembers = [] } = this.model;

    const functionalMembers = members.map((id) => {
      const item = this.graph.findById(id);

      return {
        x: item.model.x,
        y: item.model.y,
        getBBox: () => {
          return item.getBBox();
        },
      };
    });
    const functionalNoneMembers = nonMembers.map((id) => {
      const item = this.graph.findById(id);

      return {
        x: item.model.x,
        y: item.model.y,
        getBBox: () => {
          return item.getBBox();
        },
      };
    });
    switch (this.hullType) {
      case 'round-convex':
        // @ts-ignore
        contour = genConvexHull(functionalMembers);
        hull = roundedHull(
          contour.map((p) => [p.x, p.y]),
          this.padding,
        );
        path = parsePathString(hull);
        break;
      case 'smooth-convex':
        // @ts-ignore
        contour = genConvexHull(functionalMembers);
        if (contour.length === 2) {
          hull = roundedHull(
            contour.map((p) => [p.x, p.y]),
            this.padding,
          );
          path = parsePathString(hull);
        } else if (contour.length > 2) {
          hull = paddedHull(
            contour.map((p) => [p.x, p.y]),
            this.padding,
          );
          path = getClosedSpline(hull);
        }
        break;
      case 'bubble':
        // @ts-ignore
        contour = genBubbleSet(functionalMembers, functionalNoneMembers, this.bubbleCfg);
        path = contour.length >= 2 && getClosedSpline(contour);
        break;
      default:
    }
    return path;
  }

  get path() {
    return this.calcPath();
  }
}

export class HullManager extends ItemManger<HullCfg, Hull> {
  createItem(data: any) {
    return new Hull(this.graph, data);
  }
}
