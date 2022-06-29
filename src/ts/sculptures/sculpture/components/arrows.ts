import {allSculptures, activeSculpture} from "./../sculpture";
import * as $ from "jquery";

interface langApp {
    [key: string]: string | any;
}

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body");

// Arrow 

export const leftArrow = (): string => {
    let prevSculptureNum: number = Number(activeSculpture()) - 1;
    if (prevSculptureNum < 0) prevSculptureNum = (allSculptures().length) - 1;

    const prevSculpture: string = allSculptures()[prevSculptureNum];
    
    return prevSculpture;
};

export const rightArrow = (): string => {
    let nextSculptureNum: number = Number(activeSculpture()) + 1;
    if (nextSculptureNum === allSculptures().length) nextSculptureNum = 0;

    const nextSculpture: string = allSculptures()[nextSculptureNum];

    return nextSculpture;
};  

$(".navigating__arrow-left").on("click", (): void => {
    const windowWidth: number = page.width();
    
    bottomArrowClick("nextSculpture", "sculptureToSculpture", "arrow__prev-page-name", leftArrow());
    if (windowWidth < 1000) bottomArrowClick("swipeRight", "sculptureToSculpture swipeRightLoad", "arrow__next-page-name", rightArrow());
});

$(".navigating__arrow-right").on("click", (): void => {
    const windowWidth: number = page.width();

    bottomArrowClick("nextSculpture", "sculptureToSculpture", "arrow__next-page-name", rightArrow());
    if (windowWidth < 1000) bottomArrowClick("swipeLeft", "sculptureToSculpture", "arrow__prev-page-name", leftArrow());
});

export const bottomArrowClick = (addClass: string, classLS: string, arrowClass: string, linkFunction: string): void => {
    if (body.hasClass(addClass)) return;

    localStorage.setItem("typeSculptureAnim", classLS);

    body.removeClass();
    setTimeout((): JQuery<Element> => body.addClass(addClass));

    $("." + arrowClass).css("animation", "hide 0.3s forwards");
    $(".cursor, #cursor").addClass("close-cursor");
    $("html").animate({scrollTop: "0"});

    setTimeout((): void => {
        localStorage.setItem("newPageArrowClick", arrowClass);
        location.href = "./sculpture.html#" + linkFunction;
        location.reload();
    }, 300);
};

page.on("popstate", (): void => location.reload());

// Generate hover arrow text

export const nearbyPages = (direction: string, arrowName: string): void => {
    const activeLanguageLS = localStorage.getItem("lang");

    import("origin/content/sculptures/sculpture/content_files" + direction + ".json").then(langJSON => {
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