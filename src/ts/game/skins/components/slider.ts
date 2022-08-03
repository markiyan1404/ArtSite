import * as $ from "jquery";

import {
    Swiper,
    Scrollbar,
    Mousewheel,
    Lazy
} from "swiper";

import { createSlider } from "./sliders_constructions";
import { mouveHover } from "originTS/cursor/cursor";
import { contentUpdate } from "originTS/navigation/components/check_page_language";

$(".content__skins").on("click", function (): void {
    const activeSkinsSection: string = $(this).attr("data-skins");
    Swiper.use([Scrollbar, Mousewheel, Lazy]);

    const isSlider: number = $(`.swiper-container-${activeSkinsSection}`).length;

    if (isSlider === 0) {
        createStandartSlider(activeSkinsSection);

        generateSkins(activeSkinsSection);
        addSkinsType(activeSkinsSection);

        if (activeSkinsSection === "characters") createSlider(".swiper-container-characters", ".swiper-wrapper-characters", 4);
        if (activeSkinsSection === "obstacles") createSlider(".swiper-container-obstacles", ".swiper-wrapper-obstacles", 4);
        if (activeSkinsSection === "backgrounds") createSlider(".swiper-container-backgrounds", ".swiper-wrapper-backgrounds", 3);
    } 
    else {
        $(`.swiper-container-${activeSkinsSection}`).css("display", "flex");
    }

    setTimeout((): JQuery<HTMLElement> => $(".swiper-slide").css("animation", "none"), 700);


    // Choose active 

    $(".swiper-slide").on("click", function (): void {
        if ($(this).hasClass("open")) {
            $(`.swiper-container-${activeSkinsSection} .active`).removeClass("active").addClass("open");
            $(this).removeClass("open").addClass("active");

            const points: string = JSON.parse(localStorage.getItem("skins"));

            // remove active from object

            const allValues = Object.values(points[activeSkinsSection]);
            for (let i: number = 0; i < allValues.length; i++) {
                if (allValues[i] === "active") {
                    points[activeSkinsSection][Object.keys(points[activeSkinsSection])[i]] = "open";
                }
            }

            // add active to object

            const activePoint: string = $(this).attr("data-point");
            points[activeSkinsSection][activePoint] = "active";

            localStorage.setItem("skins", JSON.stringify(points));
        }
    });

});

const createStandartSlider = (activeSkinsSection): void => {
    $(".content__character").append(
        `<div class="swiper-container swiper-container-${activeSkinsSection}">
            <div class="scrollbar">
                <h1 class="scrollbar__year language" data-key="scrollBar"></h1>
                <div class="swiper-scrollbar mouse-active"></div>
            </div>
            <div class="swiper-wrapper swiper-wrapper-${activeSkinsSection}"></div>
        </div>`);
    mouveHover();
    contentUpdate(localStorage.getItem("lang"));
};

// Generate skins

const generateSkins = (activeSkinsSection): void => {
    const points: string = JSON.parse(localStorage.getItem("skins"))[activeSkinsSection];
    const skinsNumbers: number = 5;

    for (let p: number = 0; p < skinsNumbers; p++) {
        $(`.swiper-wrapper-${activeSkinsSection}`).append(
            `<section class="swiper-slide swiper-slide-${p}" data-point="${Object.keys(points)[p]}">
                <img data-src="./img/game/choose_skin/${activeSkinsSection}/${p}.png" class="swiper-slide__image"/>
                <div class='swiper-lazy-preloader'></div>
            </section>`); 

        $(".swiper-slide img").addClass("swiper-lazy");
    }
};

const addSkinsType = (activeSkinsSection): void => {
    const point = JSON.parse(localStorage.getItem("skins"))[activeSkinsSection];

    const skinsClasses = Object.values(point);
    for (let s: number = 0; s < skinsClasses.length; s++) {
        $(`.swiper-container-${activeSkinsSection} .swiper-slide-${s}`).addClass(skinsClasses[s]);

        if (skinsClasses[s] === "close") {
            $(`.swiper-container-${activeSkinsSection} .swiper-slide-${s}`).append(
                `<section class='swiper-slide__lock'>
                <img src='./img/game/choose_skin/lock.png' class='lock__image' />
                <h2>${Object.keys(point)[s]} <b class='language' data-key='point'></b></h2>
                </section>`);
        }
    }
};