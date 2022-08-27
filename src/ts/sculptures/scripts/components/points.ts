import * as $ from "jquery";
import { getActiveImage, allSlides, activeClassSlide } from "./slider";
import { contentUpdate } from "originTS/navigation/components/check_page_language";

const pointActiveClass: string = "points__point-active",
    page: JQuery<Window & typeof globalThis> = $(window);

// Generate points

const generateSliderPoints = (): void => {
    for (let p: number = 0; p < allSlides.length; p++) { 
        let pointClass: string;

        p % 2 && p !== 0 ? pointClass = "point__icon-big" : pointClass = "point__icon-small";

        $(".points").append(`<div class="points__point"><h2 class="point__year language" data-key="year${p}"></h2><div class="point__icon ${pointClass} mouse-active"></div></div>`);
    }
};
generateSliderPoints();

// Add active class

const addActiveClass = (): void => {
    const allPoints: JQuery<Element> = $(".points__point");

    allPoints.removeClass(pointActiveClass);
    $(allPoints[getActiveImage()]).addClass(pointActiveClass);
};
addActiveClass();

$(".arrows__arrow").on("click", (): void => {
    addActiveClass();
});

// Point click

$(".point__icon").on("click", function(): void {
    $(".points__point").removeClass(pointActiveClass);
    $(this.parentElement).addClass(pointActiveClass);

    allSlides.removeClass(activeClassSlide);
    $(allSlides[activationSlide()]).addClass(activeClassSlide);

    $(".slide__image").css("animation-delay", "0s");
});

export const activationSlide = (): number => {
    const allPoints: JQuery<Element> = $(".points__point");

    for (let p: number = 0; p<allPoints.length; p++) {
        if (allPoints[p].classList.value.indexOf(pointActiveClass) !== -1) {
            return p;
        }
    }
};

// Points and years position on phone

page.on("load", (): void => {
    if (page.width() < 1000 || 
    page.width() > 900 && page.width() < 1400 && page.height() > 900 && page.height() < 1600) {
        pointsPotionOnPhone();
        generateYearsOnPhone();
    }
});

page.on("resize", (): void => {
    if (page.width() < 1000 || 
    page.width() > 900 && page.width() < 1400 && page.height() > 900 && page.height() < 1600) {
        generateYearsOnPhone();
        pointsPotionOnPhone();
    }
    else {
        $(".slide__year-mobile").remove();
        $(".content").animate({scrollTop: 0}, 0);
    }
});

const pointsPotionOnPhone = (): void => {
    const allPoints: JQuery<Element> = $(".points__point"),
        allBlocks: JQuery<Element> = $(".slider__slide");

    for (let b: number = 0; b < allBlocks.length; b++) {
        const activeBlockSettings = $(allBlocks[b])[0].getBoundingClientRect();

        $(allPoints[b]).css("top", activeBlockSettings.top + $(".content").scrollTop() + parseInt($(allBlocks[b]).css("padding-top")));
    }
};

const generateYearsOnPhone = () => {
    const allBlocks: JQuery<Element> = $(".slider__slide");

    if ($(".slide__year-mobile").length !== 0) return;

    for (let b: number = 0; b < allBlocks.length; b++) {

        $(allBlocks[b]).append(`<h2 class="slide__year-mobile language" data-key="year${b}"></h2>`);
    }

    contentUpdate("en");
};