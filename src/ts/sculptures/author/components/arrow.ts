
import * as $ from "jquery";
import {activeAuthor, allAuthors} from "../author";

interface langApp {
    [key: string]: string | any;
}

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body");

// Arrow 

export const leftArrow = (): string => {
    let prevAuthorNum: number = Number(activeAuthor()) - 1;
    if (prevAuthorNum < 0) prevAuthorNum = (allAuthors().length) - 1;

    const prevAuthor: string = allAuthors()[prevAuthorNum];    

    return prevAuthor;
};

export const rightArrow = (): string => {
    let prevAuthorNum: number = Number(activeAuthor()) + 1;
    if (prevAuthorNum === allAuthors().length) prevAuthorNum = 0;

    const nextAuthor: string = allAuthors()[prevAuthorNum];

    return nextAuthor;
};  

$(".navigating__arrow-left").on("click", (): void => {
    const windowWidth: number = page.width();

    bottomArrowClick("nextAuthor", "authorToAuthor", "arrow__prev-page-name", leftArrow());
    if (windowWidth < 1000) bottomArrowClick("swipeRight", "authorToAuthor swipeRightLoad", "arrow__next-page-name", rightArrow());
});

$(".navigating__arrow-right").on("click", (): void => {
    const windowWidth: number = page.width();

    bottomArrowClick("nextAuthor", "authorToAuthor", "arrow__next-page-name", rightArrow());
    if (windowWidth < 1000) bottomArrowClick("swipeLeft", "authorToAuthor", "arrow__prev-page-name", leftArrow());
});

export const bottomArrowClick = (addClass: string, classLS: string, arrowClass: string, linkFunction: string): void => {
    if (body.hasClass(addClass)) return;

    localStorage.setItem("typeAuthorAnim", classLS);

    body.removeClass();
    setTimeout((): JQuery<Element> => body.addClass(addClass));

    $(".cursor, #cursor").addClass("close-cursor");
    $("." + arrowClass).css("animation", "hide 0.3s forwards");
    $("html").animate({scrollTop: "0"});

    setTimeout((): void => {
        console.log(linkFunction);
        localStorage.setItem("newPageArrowClick", arrowClass);
        location.href = "./sculptures_author.html#" + linkFunction;
    }, 300);
};

page.on("popstate", (): void => location.reload());

// Hover arrow

export const nearbyPages = (direction: string, arrowName: string): void => {
    const activeLanguageLS: string = localStorage.getItem("lang");

    import("origin/content/sculptures/author/" + direction + ".json").then(langJSON => {
        const currLangExport: langApp = Object.entries(langJSON.default)[Object.keys(langJSON.default).indexOf(activeLanguageLS)][1], 
            nearbyPageName = currLangExport.main_title;
        $(arrowName).html(nearbyPageName);   
    }); 
};

// Show arrow text on load

page.on("load", (): void => {
    const newPageArrowClickLS: string = localStorage.getItem("newPageArrowClick"),
        activeCursorLS: string = localStorage.getItem("activeCursor");

    if (newPageArrowClickLS !== null && activeCursorLS !== "false") {
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