import { Component, jsx } from '@antv/f-engine';
import { reaction } from 'mobx';

export function connect(mapStatetoProps?): any {
  return function (WrapperComponent) {
    return class Connector extends Component {
      isFirst = true;

      prevProps = {};

      disposer = null;

      timer = null;

      willMount(): void {
        this.disposer = reaction(
          () => {
            return mapStatetoProps(this.context.f6Context.graph, this.props, this.prevProps);
          },
          this.updateProps,
          {
            delay: 1,
          },
        );

        this.updateProps(mapStatetoProps(this.context.f6Context.graph, this.props, this.prevProps));
        this.isFirst = false;
      }

      updateProps = (stateProps) => {
        if (!stateProps) return;

        this.prevProps = stateProps;
        this.isFirst &&
          (this.state = {
            stateProps,
          });
        if (!this.isFirst) {
          this.setState({
            stateProps,
          });
        }
      };

      render() {
        const { forwardRef, ...other } = this.props;
        return <WrapperComponent {...{ ...this.state.stateProps, ...other }} ref={forwardRef} />;
      }

      didUnmount(): void {
        this.disposer?.();
      }
    };
  };
}
