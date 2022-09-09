import { BoxGeometry, Mesh, MeshNormalMaterial, Scene } from 'three';
import { initCamera } from './core/camera';
import { initRenderer } from './core/renderer';
import './style.css';

function main() {
  document.addEventListener('DOMContentLoaded', () => {
    const canvas: HTMLCanvasElement | null = document.querySelector('#canvas');
    const camera = initCamera(canvas);
    const renderer = initRenderer(canvas);

    const scene = new Scene();

    const boxWidth = 0.2;
    const boxHeight = 0.2;
    const boxDepth = 0.2;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new MeshNormalMaterial(); // greenish blue

    const cube = new Mesh(geometry, material);
    scene.add(cube);

    function render(time: GLfloat) {
      time *= 0.001; // convert time to seconds

      cube.rotation.x = time / 2000;
      cube.rotation.y = time / 1000;

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // render(0);
  });
}

main();
