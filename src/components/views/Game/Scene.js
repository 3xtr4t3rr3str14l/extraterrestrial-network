import React from 'react';
import * as BABYLON from 'babylonjs';

class Scene extends React.Component {
  componentDidMount() {
    this.engine = new BABYLON.Engine(
      this.canvas,
      true,
    );

    const scene = new BABYLON.Scene(this.engine);
    BABYLON.Scene = scene;

    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas,
      });
    }

    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  }

  onCanvasLoaded = (c) => {
    if (c !== null) {
      this.canvas = c;
    }
  }

  scene: BABYLON.Scene;
  engine: BABYLON.Engine;
  canvas: HTMLCanvasElement;

  render() {
    const { width, height } = this.props;

    const opts: any = {};

    if (width !== undefined && height !== undefined) {
      opts.width = width;
      opts.height = height;
    }

    return (
      <canvas
        {...opts}
        ref={this.onCanvasLoaded}
      />
    );
  }
}

Scene.propTypes = {
  onSceneMount: React.PropTypes.func.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default Scene;
