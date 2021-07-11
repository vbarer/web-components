// import * as THREE from "three";
// import {Scene, DirectionalLight, MeshPhongMaterial, SphereGeometry, Mesh, PerspectiveCamera} from 'three

// const scene = new THREE.Scene();
// let camera: any = null;
// const timeStep = 0.001;
// let renderer: any;

// function setRenderer() {
//   const canvas = document.querySelector('#c');
//   renderer = new THREE.WebGLRenderer({canvas});
// }

// function addCamera() {
//   const fov = 75;
//   const aspect = 2;  // the canvas default
//   const near = 0.1;
//   const far = 5;
//   camera = new PerspectiveCamera(fov, aspect, near, far);
//   camera.position.z = 2;
// }
//
// function addColor() {
//   const color = 0xFFFFFF;
//   const intensity = 1;
//   const light = new DirectionalLight(color, intensity);
//   light.position.set(-1, 2, 4);
//   scene.add(light);
// }
//
// function makeSphere() {
//   const material = new MeshPhongMaterial({color: 0xFFFFFF});
//   const geometry = new SphereGeometry(5, 30, 40);
//   const sphere = new Mesh(geometry, material);
//   sphere.position.z = -20;
//   scene.add(sphere);
// }
//
// function render() {
//   renderer.render(scene, camera);
//   requestAnimationFrame(render);
// }

import {IMessage} from "../custom-canvas/custom-canvas.model";

addEventListener('message', (msg) => {
  console.log(`data: `, msg.data as IMessage);
  // const data = msg.data;
  // switch (data.type) {
  //   case 'init':
  //     const canvas = data.canvas;
  //     break;
  //   case 'update':
  //     const x = data.x;
  //     const y = data.y;
  //     const response = `x: ${x}, y: ${y}`;
  //   postMessage(response);
  // }

});

// setRenderer();
// addCamera();
// addColor();
// makeSphere();
// render();
