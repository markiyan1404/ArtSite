import * as $ from "jquery";
import {bottomArrowClick, leftArrow, rightArrow} from "./arrow";

const page: JQuery<Window & typeof globalThis> = $(window);

// Swipe on phone

setTimeout((): void => localStorage.setItem("typePaintingAnim", "authorToAuthor"), 700);

let startingX: number, startingY: number, movingX: number, movingY: number;

$("*").on("touchstart", (event): void => {
    startingX = event.touches[0].clientX ;
    startingY = event.touches[0].clientY ;
});

$("*").on("touchmove", (event): void => {
    movingX = event.touches[0].clientX ;
    movingY = event.touches[0].clientY ;
});

$("*").on("touchend", (): void => {
    const windowWidth: number = page.width(),
        checkPhone: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent),
        navWindowDisplay: string = $(".menu, .languages__choice, .colors__active").css("display");

    if (startingX + 150 < movingX && checkPhone && navWindowDisplay === "none" && windowWidth < 1000){
        bottomArrowClick("swipeLeft", "authorToAuthor swipeLeftLoad", "arrow__prev-page-name", leftArrow());
    }

    if (startingX - 150 > movingX && checkPhone && navWindowDisplay === "none" && windowWidth < 1000) {
        bottomArrowClick("swipeRight", "authorToAuthor", "arrow__next-page-name", rightArrow());
    }
});