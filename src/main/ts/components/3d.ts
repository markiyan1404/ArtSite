import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const monkeyUrl = new URL("../../../3d/scene.gltf", import.meta.url);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 0, 5);
orbit.update();

const assetLoader = new GLTFLoader();

assetLoader.load(monkeyUrl.href, function(gltf) {
    const model = gltf.scene;
    scene.add(model);
    model.position.set(0, 0, 1);
}, undefined, function(error) {
    console.error(error);
});

function animation() {
    // box.rotation.x += 0.01;
    // box.rotation.y += 0.01;
    renderer.render(scene, camera);
}

const pLight = new THREE.PointLight(0xFFFFFF, 1.1);
pLight.position.set(0, -3, 7);
scene.add(pLight);

const aLight = new THREE.AmbientLight(0xFFFFFF, 1.1);
scene.add(aLight);

renderer.setAnimationLoop(animation);





// const scene = new THREE.Scene(),
//     camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 10;
    
// const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
// renderer.setClearColor(0x000000, 0);
// renderer.setSize(1280, 720);

// renderer.domElement.setAttribute("id", "Manecraft3DObj");
// document.body.insertBefore(renderer.domElement, document.body.firstChild);



// const loader = new GLTFLoader();
// let obj = null;

// loader.load("../../../3d/monkey.glb", function(gltf) {
//     obj = gltf;
//     obj.scene.scale.set(1.3, 1.3, 1.3);

//     scene.add(obj.scene);
// });