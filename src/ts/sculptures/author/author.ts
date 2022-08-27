import * as $ from "jquery";

import "originSCSS/sculptures/author/author.scss";
import "originSCSS/sculptures/author/adap/adap-author.scss";

import {allSculpturesName, allAuthorsName} from "../scripts/components/data-name";
import {nearbyPages, leftArrow, rightArrow} from "./components/arrow";
import "./components/years";
import "./components/swipe";

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body");

// Get page identification key 

const key: string = location.href.split("#")[1];
body.attr("data-name", key);

// New user 

const newUser = (): void => {
    if (localStorage.getItem("allSculpturesAuthors")) return;

    const allSculptures: string = String(allSculpturesName),
        allAuthors: string = String(allAuthorsName);

    localStorage.setItem("allSculptures", allSculptures);
    localStorage.setItem("allSculpturesAuthors", allAuthors);
};

newUser();

// Close author 

$(".content__close").on("click", (): void => {
    $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");
    localStorage.setItem("typeSculpturesAnim", "paintingsToSculptures");

    body.removeClass();
    setTimeout((): JQuery<Element> => body.addClass("authorToSculpture"));

    setTimeout((): void => {
        const lastSculptureName: string = localStorage.getItem("lastSculptureName");
        localStorage.setItem("typeSculptureAnim", "sculpturesToSculpture");
        lastSculptureName === null ? location.href = "./sculptures.html" : location.href = "./sculpture.html#" + lastSculptureName;
    }, 810);
});

// Generate image 

$(".content__information img").attr("src", `./img/sculptures/authors/${key}.webp`);

// Active author

export const allAuthors = (): string[] => {
    const allAuthorsLS: string = localStorage.getItem("allSculpturesAuthors"),
        allAuthors: string[] = allAuthorsLS.split(",");

    return allAuthors;
};

export const activeAuthor = (): string => {
    const lastAuthor: string = String(allAuthors().indexOf(key));
    localStorage.setItem("lastSculpturesAuthor", lastAuthor); 

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
    checkBodyClass();

    nearbyPages(rightArrow(), ".arrow__next-page-name");
    nearbyPages(leftArrow(), ".arrow__prev-page-name");
});