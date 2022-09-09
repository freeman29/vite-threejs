import { WebGLRenderer } from 'three';

export const initRenderer = (canvas: HTMLCanvasElement | null): WebGLRenderer => {
  const canvasWidth = canvas?.offsetWidth ?? window.outerWidth;
  const canvasHeight = canvas?.offsetHeight ?? window.outerHeight;
  const renderer = new WebGLRenderer({
    canvas: canvas ?? undefined,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(canvasWidth, canvasHeight);

  return renderer;
};
