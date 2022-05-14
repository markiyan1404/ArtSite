import * as $ from "jquery";
import { getActiveImage, allImages, allNames, activeClassImages, activeClassName } from "./slider";

const pointActiveClass = "points__point-active",
    page = $(window);

// Generate points

const generateSliderPoints = (): void => {
    const allImages: JQuery<Element> = $(".slider__image");

    for (let p: number = 0; p < allImages.length; p++) {
        let pointClass: string;

        p % 2 && p !== 0 ? pointClass = "point__icon-big" : pointClass = "point__icon-small";

        $(".points").append(`<div class="points__point"><h2 class="point__year language" data-key="year${p}"></h2><div class="point__icon ${pointClass} mouse-active"></div></div>`);
    }
};
generateSliderPoints();

// Add active class

const addActiveClass = (): any => {
    const activePoints: JQuery<Element> = $(".points__point");

    activePoints.removeClass(pointActiveClass);
    $(activePoints[getActiveImage()]).addClass(pointActiveClass);
};
addActiveClass();

$(".arrows__arrow").on("click", (): void => {
    addActiveClass();
});

// Point click

$(".point__icon").on("click", function(): void {
    $(".points__point").removeClass(pointActiveClass);
    $(this.parentElement).addClass(pointActiveClass);

    allImages.removeClass(activeClassImages);
    $(allImages[activationSlide()]).addClass(activeClassImages);

    allNames.removeClass(activeClassName);
    $(allNames[activationSlide()]).addClass(activeClassName);

    $(".slider__image").css("animation-delay", "0s");
});

export const activationSlide = (): number => {
    const allPoints: JQuery<Element> = $(".points__point");

    for (let p: number = 0; p<allPoints.length; p++) {
        if (allPoints[p].classList.value.indexOf(pointActiveClass) !== -1) {
            return p;
        }
    }
};

// Line position

const linePosition = () => {
    const pointsPotion = $(".point__icon").offset().top + $(".point__icon").height();

    $(".points__line").css("top", pointsPotion);
};

page.on("load", () => {
    setTimeout(() => {
        linePosition();
    }, 25); 
});

page.on("resize", () => {
    linePosition();
});