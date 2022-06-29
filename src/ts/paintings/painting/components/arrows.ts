import {allPaintings, activePainting} from "../painting";
import * as $ from "jquery";

interface langApp {
    [key: string]: string | any;
}

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body");

// Arrow 

export const leftArrow = (): string => {
    let prevPaintingNum: number = Number(activePainting()) - 1;
    if (prevPaintingNum < 0) prevPaintingNum = (allPaintings().length) - 1;

    const prevPainting: string = allPaintings()[prevPaintingNum];
    
    return prevPainting;
};

export const rightArrow = (): string => {
    let nextPaintingNum: number = Number(activePainting()) + 1;
    if (nextPaintingNum === allPaintings().length) nextPaintingNum = 0;

    const nextPainting: string = allPaintings()[nextPaintingNum];

    return nextPainting;
};  

$(".navigating__arrow-left").on("click", (): void => {
    const windowWidth: number = page.width();

    bottomArrowClick("nextPainting", "paintingToPainting", "arrow__prev-page-name", leftArrow());
    if (windowWidth < 1000) bottomArrowClick("swipeRight", "paintingToPainting swipeRightLoad", "arrow__next-page-name", rightArrow());
});

$(".navigating__arrow-right").on("click", (): void => {
    const windowWidth: number = page.width();

    bottomArrowClick("nextPainting", "paintingToPainting", "arrow__next-page-name", rightArrow());
    if (windowWidth < 1000) bottomArrowClick("swipeLeft", "paintingToPainting", "arrow__prev-page-name", leftArrow());
});

export const bottomArrowClick = (addClass: string, classLS: string, arrowClass: string, linkFunction: string): void => {
    if (body.hasClass(addClass)) return;

    localStorage.setItem("typePaintingAnim", classLS);

    body.removeClass();
    setTimeout((): JQuery<Element> => body.addClass(addClass));

    $("." + arrowClass).css("animation", "hide 0.3s forwards");
    $(".cursor, #cursor").addClass("close-cursor");
    $("html").animate({scrollTop: "0"});

    setTimeout((): void => {
        localStorage.setItem("newPageArrowClick", arrowClass);
        location.href = "./painting.html#" + linkFunction;
        location.reload();
    }, 300);
};

page.on("popstate", (): void => location.reload());

// Generate hover arrow text

export const nearbyPages = (direction: string, arrowName: string): void => {
    const activeLanguageLS = localStorage.getItem("lang");

    import(`origin/content/paintings/painting/${direction}.json`).then(langJSON => {
        const currLangExport: langApp = Object.entries(langJSON.default)[Object.keys(langJSON.default).indexOf(activeLanguageLS)][1], 
            nearbyPageName: string = currLangExport.mainTitle;
        $(arrowName).html(nearbyPageName);   
    }); 
};

// Show arrow text on load

page.on("load", (): void => {
    const newPageArrowClickLS: string = localStorage.getItem("newPageArrowClick");
    const activeCursorLS: boolean = JSON.parse(localStorage.getItem("activeCursor"));

    if (activeCursorLS) {
        $("." + newPageArrowClickLS).css("opacity", "1").css("display", "block");
    }

    $(".navigating__arrow").on("mouseleave", (e): void => {
        $(e.target.childNodes[0]).css({"animation": "hide 0.4s forwards", "display": "none"});
        localStorage.setItem("activeCursor", "false");
    });

    let leaveToArrow: boolean = false;
    $(".navigating__arrow").on("mouseover", (e): void => {
        $(e.target.childNodes[0]).css({"animation": "show 0.4s forwards", "display": "block"});

        leaveToArrow = true;
        if (leaveToArrow && $(".cursor").hasClass("activeCursor")) {
            $(e.target.childNodes[0]).css("animation", "none");
        }
        localStorage.setItem("activeCursor", "true");
    });

    localStorage.removeItem("newPageArrowClick");
});