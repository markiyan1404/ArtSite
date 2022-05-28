import "./../scss/sculpture.scss";
import "./../scss/adap/adap-sculpture.scss";
import * as $ from "jquery";
import {nearbyPages, rightArrow, leftArrow} from "./components/arrows";
import {allSculpturesName, allAuthorsName} from "../../ts/components/data-name";
import "./components/swipe";

const page: JQuery<Window & typeof globalThis> = $(window),
    body: JQuery<HTMLElement> = $("body"),
    informationImage: JQuery<HTMLElement> = $("#information__image");

// Get page identification key 

const key: string = location.href.split("#")[1];
body.attr("data-name", key);

// New user

const newUser = (): void => {
    if (localStorage.getItem("allSculptures")) return;

    const allSculptures: string = String(allSculpturesName),
        allAuthors: string = String(allAuthorsName);

    localStorage.setItem("allSculptures", allSculptures);
    localStorage.setItem("allAuthors", allAuthors);
};

newUser();

// Close page 

$(".content__close").on("click", (): void => {
    $(".anim-show1").addClass("allSculptures");
    setTimeout((): JQuery<Element> => $(".anim-show2").addClass("allSculptures"), 700);
    $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");

    setTimeout((): string => location.href="./sculptures.html", 1500);
});

// Get image

page.on("load", (): JQuery<Element> => $(".content__information img").attr("src", "./img/sculptures/" + key + ".webp"));

// Active sculpture

export const allSculptures = (): string[] => {
    const allSculpturesLS: string = localStorage.getItem("allSculptures"),
        allSculptures: string[] = allSculpturesLS.split(",");

    return allSculptures;
};

export const activeSculpture = (): string => {
    const lastSculpture: string = String(allSculptures().indexOf(key)),
        lastSculptureName: string = allSculptures()[lastSculpture];

    localStorage.setItem("lastSculpture", lastSculpture); 
    localStorage.setItem("lastSculptureName", lastSculptureName);

    return lastSculpture;
};

activeSculpture();

// Generate link to author

import(`../content/${key}.json`).then(langJSON => {
    $(".description__link").attr("data-author-link", langJSON.specifical.authorLink);
    if (langJSON.specifical.authorLink === "") $(".description__link").removeClass("mouse-active");
}); 

$(".description__link").on("click", function (): void {
    if ($(this).hasClass("mouse-active")) {
        body.removeClass();
        setTimeout((): JQuery<Element> => body.addClass("sculptureToAuthor"));
        $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");
        
        const activeAuthor: string = $(this).attr("data-author-link");
        localStorage.setItem("typeAuthorAnim", "sculptureToAuthor");
        setTimeout((): string => location.href = "./sculpture_author.html#" + activeAuthor, 500);
    }
});

// Get and change body class

const checkBodyClass = (): void => {
    const getTypeAnimLS: string = localStorage.getItem("typeSculptureAnim");

    getTypeAnimLS === null ? body.addClass("sculpturesToSculpture") : body.addClass(getTypeAnimLS);
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

// Adap sculpture 

if (page.width() <= 1000) {
    const year: JQuery<Element> = $(".content__year");
    $(".description__title").before(year);
    informationImage.removeClass("mouse-active2");
}

let fistAnimation: boolean = false;
page.on("resize", (): void => {
    const year: JQuery<Element> = $(".content__year");

    if (page.width() <= 1000 && !fistAnimation) {
        informationImage.removeClass("mouse-active2");
        $(".description__title").append(year);
        fistAnimation = true;
    }

    else if (page.width() >= 1000 && fistAnimation) {
        informationImage.addClass("mouse-active2");
        $(".content").append(year);
        fistAnimation = false;
    }
});