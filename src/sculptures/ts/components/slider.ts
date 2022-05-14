import * as $ from "jquery";
import { allSculpturesName } from "./data-name";

// Create slides 

const createSlides = () => {
    for (let p: number = 0; p < allSculpturesName.length; p++) {
        $(".slider").append(`
        <div class='slider__slide'>
        <img src="./img/sculptures/${allSculpturesName[p]}.png" data-name="${allSculpturesName[p]}" class="slider__image"> 
        <h1 class="slider__name language mouse-active" data-key="sculptureName${p}"></h1></div>`
        );
    }

    $($(".slider__image")[0]).addClass("slider__image-active");
    $($(".slider__name")[0]).addClass("slider__name-active");
};

createSlides();

// Arrow click

export const allImages: JQuery<Element> = $(".slider__image"),
    allNames: JQuery<Element> = $(".slider__name"),
    activeClassImages: string = "slider__image-active",
    activeClassName: string = "slider__name-active";

export const getActiveImage = (): number => {
    for (let i: number = 0; i<allImages.length; i++) {
        if (allImages[i].classList.value.indexOf(activeClassImages) !== -1) {
            return i;
        }
    }
};

$(".arrows__arrow-left").on("click", (): void => {

    if (getActiveImage() - 1 >= 0) {
        $(allImages[getActiveImage() - 1]).addClass(activeClassImages);
        $(allImages[getActiveImage() + 1]).removeClass(activeClassImages);

        $(allNames[getActiveImage()]).addClass(activeClassName);
        $(allNames[getActiveImage() + 1]).removeClass(activeClassName);
    }
    else {
        $(allImages[allImages.length - 1]).addClass(activeClassImages);
        $(allImages[0]).removeClass(activeClassImages);

        $(allNames[allNames.length - 1]).addClass(activeClassName);
        $(allNames[0]).removeClass(activeClassName);
    }

    $(".slider__image").css("animation-delay", "0s");
});

$(".arrows__arrow-right").on("click", (): void => {
    $(".slider__name").css("animation", "slideActive 0.6s forwards");
    if (getActiveImage() + 1 >= allImages.length) {
        $(allImages[0]).addClass(activeClassImages);
        $(allImages[allImages.length - 1]).removeClass(activeClassImages);

        $(allNames[0]).addClass(activeClassName);
        $(allNames[allNames.length - 1]).removeClass(activeClassName);
    }
    else {
        $(allImages[getActiveImage() + 1]).addClass(activeClassImages);
        $(allImages[getActiveImage()]).removeClass(activeClassImages);

        $(allNames[getActiveImage()]).addClass(activeClassName);
        $(allNames[getActiveImage() - 1]).removeClass(activeClassName);
    }

    $(".slider__image").css("animation-delay", "0s");
});

// Arrow size

const squareSize = (...squarer: string[]): void => {
    for (let i = 0; i<squarer.length; i++) {
        $(squarer[i]).css("height", $(squarer[i]).css("width"));
    }
};

squareSize(".point__icon-big", ".arrows__arrow");
$(window).on("resize", (): void => squareSize(".point__icon-big", ".arrows__arrow"));

const arrowSize = (): void => {
    $(".arrow__icon").css("border-width", $(".arrows__arrow").width() * 0.25);
    $(".arrow__icon").css("border-top-width", $(".arrows__arrow").width() * 0.35);
};

$(window).on("resize", (): void => arrowSize());
arrowSize();

// Check name width 

const nameWidth = () => {
    for (let i: number = 0; i < allNames.length; i++) {
        if ($(allNames[i]).width() > $(".content").width() * 0.7) $(allNames[i]).css("width", "80%");
    };
};

setTimeout(() => {
    nameWidth();
}, 300);