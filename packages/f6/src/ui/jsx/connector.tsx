// @ts-nocheck

import { jsx, Component } from '@antv/f-engine';
import { autorun } from 'mobx';

export function connect(mapStatetoProps?): any {
  return function (WrapperComponent) {
    return class Connector extends Component {
      isFirst = true;

      prevProps = {};

      disposer = null;

      willMount(): void {
        this.disposer = autorun(() => {
          const stateProps = mapStatetoProps(this.context.graph, this.props, this.prevProps);
          if (!stateProps) return;
          let isEqual = true;
          // for (const [key, value] of Object.entries(stateProps || {})) {
          //   if (this.prevProps[key] !== value) {
          //     isEqual = false;
          //   }
          // }
          // if (isEqual) return;
          this.prevProps = stateProps;
          this.isFirst &&
            (this.state = {
              allProps: {
                ...stateProps,
                ...this.props,
              },
            });
          if (!this.isFirst) {
            this.setState({
              allProps: {
                ...stateProps,
                ...this.props,
              },
            });
          }
        });
        this.isFirst = false;
      }

      render() {
        const { forwardRef } = this.props;
        return <WrapperComponent {...this.state.allProps} ref={forwardRef} />;
      }

      didUnmount(): void {
        // console.log('unmount: ', this.props.id);
        this.disposer?.();
      }
    };
  };
}
