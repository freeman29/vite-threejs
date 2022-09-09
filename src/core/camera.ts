import { PerspectiveCamera } from 'three';

export const initCamera = (canvas: HTMLCanvasElement | null): PerspectiveCamera => {
  const canvasWidth = canvas?.offsetWidth ?? window.outerWidth;
  const canvasHeight = canvas?.offsetHeight ?? window.outerHeight;
  const fov = 70;
  const aspect = canvasWidth / canvasHeight;
  const near = 0.01;
  const far = 10;
  const _camera = new PerspectiveCamera(fov, aspect, near, far);
  _camera.position.z = 1;
  _camera.aspect = canvasWidth / canvasHeight;
  _camera.updateProjectionMatrix();

  return _camera;
};
