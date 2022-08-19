import "originSCSS/3d/3d.scss";
import "originSCSS/3d/adap/adap-3d.scss";

import * as $ from "jquery";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { mouveHover2 } from "originTS/cursor/cursor";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/");

export const crate3D = (url: string): void => {

    // Progress bar

    const loadingManager = new THREE.LoadingManager();

    let isProgressBar = false;
    loadingManager.onProgress = function (url, loaded, total) {
        if (!isProgressBar) {
            
            $("body").append(`
            
            <div class='progress_bar-3d-container'>
            

                <div class='progress_bar-3d-title'>
                    <h1 class='progress_bar-3d-title-1'>3d</h1>
                    <h1 class='progress_bar-3d-title-2'>3d</h1>
                </div>
            
            </div>`);

            isProgressBar = true;
        }

        $(".progress_bar-3d-title-2").css("width", (loaded / (total)) * 100 + "%");
    };

    loadingManager.onLoad = function () {
        isProgressBar = false;
        $(".progress_bar-3d-container").fadeOut(300);
        
        setTimeout((): void => {
            $(".progress_bar-3d-container").remove(); 
        }, 300);
    };

    const monkeyUrl = url,
        renderer = new THREE.WebGLRenderer(),
        scene = new THREE.Scene();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const genarateWindow = (): void => {
        const camera = new THREE.PerspectiveCamera(30, window.innerWidth * 0.96 / window.innerHeight, 0.1, 1000);
    
        const orbit = new OrbitControls(camera, renderer.domElement);
        camera.position.set(100, 0, 100);
        orbit.autoRotate = true;
        orbit.autoRotateSpeed = 3;
        orbit.minDistance = 50;
        orbit.maxDistance = 250;
        orbit.update();
    
        function animation() {
            orbit.update();
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
    
    const assetLoader = new GLTFLoader(loadingManager);
    assetLoader.setDRACOLoader(dracoLoader);
    
    assetLoader.load(monkeyUrl, function(gltf) {
        const model = gltf.scene;
        model.position.set(1, -5, 1);

        // get and add scale

        const addSize = () => {
            const box = new THREE.Box3().setFromObject(model);
            
            const size = new THREE.Vector3();
            box.getSize(size);
            const scaleVec = new THREE.Vector3(50, 50, 50).divide(size);
            const scale = Math.min( scaleVec.x, Math.min(scaleVec.y, scaleVec.z));
            model.scale.setScalar(scale);
        };

        addSize();
        
        scene.add(model);

    }, undefined, function(error) {
        console.error(error);
    });
    
    const pLight = new THREE.PointLight(0xFFFFFF, 1);
    pLight.position.set(0, 50, 20);
    scene.add(pLight);
    
    const aLight = new THREE.AmbientLight(0xFFFFFF, 1);
    scene.add(aLight);
    
    const changeColor = (): void => {
        let getActiveTheme: string = localStorage.getItem("contrastColor1LS");

        if (!getActiveTheme) getActiveTheme = getComputedStyle(document.documentElement).getPropertyValue("--contrastColorWhite");
        if (getActiveTheme === "#fff") renderer.setClearColor(0xFFFFFF);
        if (getActiveTheme === "#0b0b0b") renderer.setClearColor(0x0B0B0B);
    };
    
    changeColor();
    
    $(".colors__black").on("click", (): void => renderer.setClearColor(0x0B0B0B));
    $(".colors__white").on("click", (): void => renderer.setClearColor(0xFFFFFF));
    
    genarateWindow();
    generateClose();
};

// Generate close

const generateClose = (): void => {
    $("body").append("<span class='body__close-container'><div class='close-container__close mouse-active2'>&#10010;</div></span>");
    mouveHover2();
    $(".close-container__close").on("click", function (): void {

        $("body").removeClass("3dActive");
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