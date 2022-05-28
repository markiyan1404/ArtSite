import "/paintings/painting/scss/painting.scss";
import "/paintings/painting/scss/adap/adap-painting.scss";
import * as $ from "jquery";
import {nearbyPages, rightArrow, leftArrow} from "./components/arrows";
import {allPaintingsName, allAuthorsName} from "../../ts/components/data-name";
import "./components/zoom";
import "./components/swipe";

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body"),
    informationImage: JQuery<HTMLElement> = $("#information__image");

// Get page identification key 

const key: string = location.href.split("#")[1];
body.attr("data-name", key);

// New user

const newUser = (): void => {
    if (localStorage.getItem("allPaintings")) return;

    const allPaintings: string = String(allPaintingsName),
        allAuthors: string = String(allAuthorsName);

    localStorage.setItem("allPaintings", allPaintings);
    localStorage.setItem("allAuthors", allAuthors);
};

newUser();

// Close page 

$(".content__close").on("click", (): void => {
    $(".anim-show1").addClass("allPaintings");
    setTimeout((): JQuery<Element> => $(".anim-show2").addClass("allPaintings"), 700);
    $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");

    setTimeout((): string => location.href="./paintings.html", 1500);
});

// Get image

page.on("load", (): JQuery<Element> => $("#information__image img").attr("src", "./img/paintings/" + key + ".webp"));

// Active painting

export const allPaintings = (): string[] => {
    const allPaintingsLS: string = localStorage.getItem("allPaintings"),
        allPaintings: string[] = allPaintingsLS.split(",");

    return allPaintings;
};

export const activePainting = (): string => {
    const lastPainting: string = String(allPaintings().indexOf(key)),
        lastPaintingName: string = allPaintings()[lastPainting];

    localStorage.setItem("lastPainting", lastPainting); 
    localStorage.setItem("lastPaintingName", lastPaintingName);

    return lastPainting;
};

activePainting();

// Generate link to author

import(`./../content/${key}.json`).then(langJSON => {
    $(".description__link").attr("data-author-link", langJSON.specifical.authorLink);
}); 

$(".description__link").on("click", function (): void {
    body.removeClass();
    setTimeout((): JQuery<Element> => body.addClass("paintingAuthor"));
    $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");
    
    const activeAuthor: string = $(this).attr("data-author-link");
    localStorage.setItem("typeAuthorAnim", "paintingToAuthor");
    setTimeout((): string => location.href = "./painting_author.html#" + activeAuthor, 500);
});

// Get and change body class

const checkBodyClass = (): void => {
    const getTypeAnimLS: string = localStorage.getItem("typePaintingAnim");

    getTypeAnimLS === null ? body.addClass("paintingToPainting") : body.addClass(getTypeAnimLS);
};

$(".languages__choice").on("click", (): void => {
    nearbyPages(rightArrow(), ".arrow__next-page-name");
    nearbyPages(leftArrow(), ".arrow__prev-page-name");
});

checkBodyClass();

page.on("load", (): void => {
    checkBodyClass();

    nearbyPages(rightArrow(), ".arrow__next-page-name");
    nearbyPages(leftArrow(), ".arrow__prev-page-name");
});

// Adap painting 

if (page.width() <= 1000) informationImage.removeClass("mouse-active2");

page.on("resize", (): void => {
    page.width() <= 1000 ? informationImage.removeClass("mouse-active2") : informationImage.addClass("mouse-active2");
});