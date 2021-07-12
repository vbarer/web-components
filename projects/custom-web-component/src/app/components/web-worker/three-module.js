const THREE = require('three');

const scene = new THREE.Scene();
let camera;
let renderer

const ThreeModule = {

  setRenderer(canvas) {
    renderer = new THREE.WebGLRenderer({canvas});
  },

  addCamera(width, height) {
    const fov = 75;
    const aspect = height / width;
    const near = 0.1;
    const far = 500;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 20;
  },

  addLight() {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    light.name = 'light';
    scene.add(light);
  },

  changeLight() {
    const light = scene.getObjectByName('light');
    light.color = new THREE.Color(`rgb(${this.getRandom(0, 255)}, ${this.getRandom(0, 255)}, ${this.getRandom(0, 255)})`);
  },

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },

  makeSphere() {
    const material = new THREE.MeshPhongMaterial({color: 0xFFFFFF, wireframe: true});
    const geometry = new THREE.SphereGeometry(6, 30, 40);
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.z = -20;
    sphere.name = 'sphere';
    scene.add(sphere);
  },

  render() {
    const sphere = scene.getObjectByName('sphere');
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(this.render.bind(this));
  },

  start(canvas) {
    this.setRenderer(canvas);
    this.addCamera(canvas.width, canvas.height);
    this.addLight();
    this.makeSphere();
    this.render();
  }
}
module.exports = ThreeModule;

