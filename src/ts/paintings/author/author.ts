import "originSCSS/paintings/author/author.scss";
import "originSCSS/paintings/author/adap/adap-author.scss";

import * as $ from "jquery";
import {allPaintingsName, allAuthorsName} from "../scripts/components/data-name";
import {nearbyPages, leftArrow, rightArrow} from "./components/arrow";
import "./components/swipe";
import "./components/years";
import "./components/close";

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body");

// Get page identification key 

const key: string = location.href.split("#")[1];
body.attr("data-name", key);

// New user 

const newUser = (): void => {
    if (localStorage.getItem("allAuthors")) return;

    const allPaintings: string = String(allPaintingsName),
        allAuthors: string = String(allAuthorsName);

    localStorage.setItem("allPaintings", allPaintings);
    localStorage.setItem("allAuthors", allAuthors);
};

newUser();

// Close author 

$(".content__close").on("click", (): void => {
    $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");
    localStorage.setItem("typePaintingAnim", "paintingsToPainting");

    body.removeClass();
    setTimeout((): JQuery<Element> => body.addClass("authorToPainting"));

    setTimeout((): void => {
        const lastPaintingName: string = localStorage.getItem("lastPaintingName");
        lastPaintingName === null ? location.href = "./paintings.html" : location.href = "./painting.html#" + lastPaintingName;
    }, 810);
});

$(".content__information img").attr("src", "./img/paintings/authors/" + key + ".webp");

// Active author

export const allAuthors = (): string[] => {
    const allAuthorsLS: string = localStorage.getItem("allAuthors"),
        allAuthors: string[] = allAuthorsLS.split(",");

    return allAuthors;
};

export const activeAuthor = (): string => {
    const lastAuthor: string = String(allAuthors().indexOf(key));
    localStorage.setItem("lastAuthor", lastAuthor); 

    return lastAuthor;
};

activeAuthor();

// Get and change body class

const checkBodyClass = (): void => {
    const getTypeAnim: string = localStorage.getItem("typeAuthorAnim");

    getTypeAnim === null ? body.addClass("authorToAuthor") : body.addClass(getTypeAnim);
};

$(".languages__choice").on("click", (): void => {
    nearbyPages(rightArrow(), ".arrow__next-page-name");
    nearbyPages(leftArrow(), ".arrow__prev-page-name");
});

checkBodyClass();

page.on("load", (): void => {

    nearbyPages(rightArrow(), ".arrow__next-page-name");
    nearbyPages(leftArrow(), ".arrow__prev-page-name");
});