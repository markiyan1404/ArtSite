import * as $ from "jquery";
import { allSculpturesName } from "./window-3-data-names";
import { show3D } from "originTS/3d/3d";

// Sculptures slider

let sculpturesNum: number = 1;

$(window).on("load", (): void => {
    $(".point__child").on("click", function(): void {
        $(".point__child").removeClass("point__child-active");
        $(this).addClass("point__child-active");
    
        sculpturesNum = parseInt(this.className[26]);
        chengSculture();
    });
});

const chengSculture = (): void => {
    $(".next-slide__image").removeClass("next-slide__image-active");
    $(".images__sculptur").removeClass("images__sculptur-active");
    $(".description__text").removeClass("description__text-active");
    $(".description__header").removeClass("description__header-active");
    $(".point__child").removeClass("point__child-active");
    
    if (sculpturesNum === 5) sculpturesNum = 0;

    if (sculpturesNum === 4) $($(".next-slide__image")[0]).addClass("next-slide__image-active");
    else $($(".next-slide__image")[sculpturesNum + 1]).addClass("next-slide__image-active");

    $($(".description__text")[sculpturesNum]).addClass("description__text-active");
    $($(".description__header")[sculpturesNum]).addClass("description__header-active");
    $($(".images__sculptur")[sculpturesNum]).addClass("images__sculptur-active");
    $($(".point__child")[sculpturesNum]).addClass("point__child-active");

    sculpturesNum++;
};

$(".next-slide__arrow").on("click", (): void => chengSculture());

// 3D

$(".description__button").on("click", (): void => {

    const sculptureName: string = $(".images__sculptur-active").attr("data-name");
    show3D(`3D_models/main/${sculptureName}/scene.gltf`);
});

// Create slides

const createSlides = (): void => {
    for (let p: number = 0; p < allSculpturesName.length; p++) {
        $(".images__background-1").before(`<img src="./img/main/window-3/${allSculpturesName[p]}.webp" data-name="${allSculpturesName[p]}" class="images__sculptur">`);

        $(".information__next-slide").append(`
            <img src="./img/main/window-3/${allSculpturesName[p]}.webp" data-name="${allSculpturesName[p]}" class="next-slide__image"> 
        `);

        $(".information__description").append(`
            <h3 class="language description__header" data-key="sculpturesName${p}"></h3>
            <p class="language description__text" data-key="sculpturesDescription${p}"></p> 
        `);

        $(".description__button").before(`
            <div class="point__child point__child-${p} mouse-active"></div>
        `);
    }

    $($(".point__child")[0]).addClass("point__child-active");
    $($(".description__header")[0]).addClass("description__header-active");
    $($(".description__text")[0]).addClass("description__text-active");
    $($(".images__sculptur")[0]).addClass("images__sculptur-active");
    $($(".next-slide__image")[1]).addClass("next-slide__image-active");
};

createSlides();