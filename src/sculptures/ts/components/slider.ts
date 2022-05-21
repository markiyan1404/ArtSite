import * as $ from "jquery";
import { allSculpturesName } from "./data-name";

const page = $(window);

// Create slides 

const createSlides = () => {
    for (let p: number = 0; p < allSculpturesName.length; p++) {
        $(".slider").append(`
        <div class='slider__slide'>
        <img src="./img/sculptures/${allSculpturesName[p]}.webp" data-name="${allSculpturesName[p]}" class="slide__image"> 
        <section class="slider__text">
        <h1 class="slide__name language mouse-active" data-key="sculptureName${p}"></h1>
        </div>
        </section>`
        );
    }

    $($(".slider__slide")[0]).addClass("slider__slide-active");
};

createSlides();

// Arrow click

export const allSlides: JQuery<Element> = $(".slider__slide"),
    activeClassSlide: string = "slider__slide-active",
    allNames: JQuery<Element> = $(".slide__name");


export const getActiveImage = (): number => {
    for (let i: number = 0; i<allSlides.length; i++) {
        if (allSlides[i].classList.value.indexOf(activeClassSlide) !== -1) {
            return i;
        }
    }
};

$(".arrows__arrow-left").on("click", (): void => {

    if (getActiveImage() - 1 >= 0) {
        $(allSlides[getActiveImage() - 1]).addClass(activeClassSlide);
        $(allSlides[getActiveImage() + 1]).removeClass(activeClassSlide);
    }
    else {
        $(allSlides[allSlides.length - 1]).addClass(activeClassSlide);
        $(allSlides[0]).removeClass(activeClassSlide);
    }

    $(".slide__image").css("animation-delay", "0s");
});

$(".arrows__arrow-right").on("click", (): void => {
    $(".slide__name").css("animation", "slideActive 0.6s forwards");
    if (getActiveImage() + 1 >= allSlides.length) {
        $(allSlides[0]).addClass(activeClassSlide);
        $(allSlides[allSlides.length - 1]).removeClass(activeClassSlide);
    }
    else {
        $(allSlides[getActiveImage() + 1]).addClass(activeClassSlide);
        $(allSlides[getActiveImage()]).removeClass(activeClassSlide);
    }

    $(".slide__image").css("animation-delay", "0s");
});

// Arrow size

const squareSize = (...squarer: string[]): void => {
    for (let i = 0; i<squarer.length; i++) {
        $(squarer[i]).css("height", $(squarer[i]).css("width"));
    }
};

squareSize(".arrows__arrow");
page.on("resize", (): void => squareSize(".arrows__arrow"));

const arrowSize = (): void => {
    $(".arrow__icon").css("border-width", $(".arrows__arrow").width() * 0.25);
    $(".arrow__icon").css("border-top-width", $(".arrows__arrow").width() * 0.35);
};

page.on("resize", (): void => arrowSize());
arrowSize();

// Generate button on mobile 

const generateButton = () => {
    $(".slider__text").append("<button class='slide__button language' data-key='button'></button>");
};

page.on("load", () => {
    if (page.width() <= 1000) generateButton();
});

page.on("resize", () => {
    const getButton = $(".slide__button").length === 0;
    if (page.width() <= 1000 && getButton) generateButton();
    if (page.width() > 1000) $(".slide__button").remove();
});

// Add anim class 

page.on("load", () => addAnimClass());

const addAnimClass = () => {
    const allSlides = $(".slider__slide"),
        speedAnim: number = 250;
    let SlideNum: number = 1;

    $(allSlides[0]).addClass("slider__slide-mobile-anim");
    const addClassToLines = setInterval((): void => {
        $(allSlides[SlideNum]).addClass("slider__slide-mobile-anim");
        SlideNum++;
    }, speedAnim); 
    
    setTimeout((): void => clearInterval(addClassToLines), speedAnim * allSlides.length);
};