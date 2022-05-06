import "/paintings/painting/author/scss/author.scss";
import "/paintings/painting/author/scss/adap/adap-author.scss";
import * as $ from "jquery";
import {allPaintingsName, allAuthorsName} from "../../../ts/components/data-paintings";
import {nearbyPages, leftArrow, rightArrow} from "./components/arrow";
import "./components/years";

const page: JQuery<Window & typeof globalThis> = $(window),
      body: JQuery<HTMLElement> = $("body");

// Get page identification key 

const key: string = location.href.split("#")[1];
body.attr("data-name", key);

// New user 

const newUser = (): void => {
    if(localStorage.getItem("allAuthors")) return;

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

$(".content__information img").attr("src", "./paintings/authors/" + key + ".webp");

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

    getTypeAnim == null ? body.addClass("authorToAuthor") : body.addClass(getTypeAnim);
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

// Adaptation 

const mobileYearsPosition = (): void => {
    if (page.width() < 1000) {
        const image: JQuery<Element> = $(".content__information img"),
              yearsPosition: number = image[0].getBoundingClientRect().top + image.height() - $(".navigation").outerHeight();
    
        $(".content__year").css("top", yearsPosition);
    } else{
        $(".content__year").css("top", "0");
    }
};

page.on("load", (): void => mobileYearsPosition());
page.on("resize", (): void => mobileYearsPosition()); 