import "./../scss/3d.scss";
import "./../scss/adap/adap-3d.scss";

import * as $ from "jquery";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const crate3D = (url): void => {

    const monkeyUrl = url;

    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
    const scene = new THREE.Scene();
    
    const genarateWindow = (): void => {
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth * 0.96 / window.innerHeight, 0.1, 1000);
    
        const orbit = new OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 0, 1);
        orbit.update();
    
        function animation() {
            renderer.render(scene, camera);
        }
    
        function onWindowResize() {
    
            camera.aspect = window.innerWidth / window.innerHeight;
        
            camera.updateProjectionMatrix();
            
            if ($(window).width() < 1000) renderer.setSize(window.innerWidth, window.innerHeight);
            else renderer.setSize(window.innerWidth*0.96, window.innerHeight);
            
        }
    
        onWindowResize();
        renderer.setAnimationLoop(animation);
    };
    
    $(window).on("resize", (): void => {
        genarateWindow();
    });
    
    const assetLoader = new GLTFLoader();
    
    assetLoader.load(monkeyUrl.href, function(gltf) {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(1, 1, 1);
    }, undefined, function(error) {
        console.error(error);
    });
    
    const pLight = new THREE.PointLight(0xFFFFFF, 1.1);
    pLight.position.set(0, 0, 1);
    scene.add(pLight);
    
    const aLight = new THREE.AmbientLight(0xFFFFFF, 1.1);
    scene.add(aLight);
    
    const changeColor = (): void => {
        let getContrastColor: string | number = getComputedStyle(document.documentElement).getPropertyValue("--contrastColorWhite");
        if (getContrastColor === "#fff") getContrastColor = 0x0B0B0B;
        if (getContrastColor === "#0b0b0b" || getContrastColor === "#080808") getContrastColor = 0xFFFFFF;
        renderer.setClearColor(getContrastColor);
    };
    
    changeColor();
    
    $(".colors__black").on("click", (): void => renderer.setClearColor(0x0B0B0B));
    $(".colors__white").on("click", (): void => renderer.setClearColor(0xFFFFFF));
    
    genarateWindow();
    generateClose();
    //   adaptation();

    // $(window).on("resize", (): void => adaptation());
};


// Generate close

const generateClose = (): void => {
    $("body").append("<span class='body__close-container'><div class='close-container__close mouse-active2'>&#10010;</div></span>");

    $(".close-container__close").on("click", function (): void {


        $(".anim-show1").addClass("hide3D");
        setTimeout((): JQuery<Element> => $(".anim-show2").addClass("hide3D"), 700);

        // Hide animation 

        setTimeout((): void => {
            $("[data-engine]").remove();
            $(this).remove();

            $(".anim-show1").removeClass("hide3D");
            $(".hide3D").fadeOut(300);

            setTimeout((): JQuery<Element> => $(".anim-show2").removeClass("hide3D").css("display", "block"), 350);
        }, 1600);
    });
};

// const adaptation = (): void => {
//     if ($(window).width() < 1000) $("[data-engine]").css({"top": "4vh", "height": "96vh"});
//     else $("[data-engine]").css({"top": "0", "height": "100vh"});
// }; 

// Show animation

export const show3D = (way): void => {
    $(".anim-show1").addClass("show3D");
    setTimeout((): JQuery<Element> => $(".anim-show2").addClass("show3D"), 700);
    
    setTimeout((): void => {
        $(".anim-show1").removeClass("show3D");
        $(".show3D").fadeOut(300);
    
        setTimeout((): JQuery<Element> => $(".anim-show2").removeClass("show3D").css("display", "block"), 350);
    }, 1500);
    
    setTimeout((): void => {
        crate3D(way);
    }, 1500);
};

// crate3D(new URL("../../3d/textures/main/scene.gltf", import.meta.url));