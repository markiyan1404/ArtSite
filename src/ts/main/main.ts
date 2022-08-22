import "originSCSS/main/main.scss";
import "originSCSS/main/adap/adap-main.scss";

import * as $ from "jquery";
import * as Splitting from "splitting";
import {updateScroller, onScroll, onResize} from "originTS/global_scripts/slowedScroll";

import "./components/window-1";
import "./components/window-2";
import "./components/window-3";
import "./components/window-4";
import "./components/window-5";
import "./components/star_game";
import "originTS/global_scripts/preloader";

const page = $(window);

// Loader animation

const loaderContetnt = (): void => {
    $("body").addClass("loadedPage");

    page.focus();

    page.on("resize", onResize);
    page.on("scroll", onScroll);

    $(".window-1").attr("data-splitting", "words");
    Splitting();

    updateScroller();
};

if (localStorage.getItem("firstLoad") === null) {
    let firstLoad: boolean | string = true;

    setTimeout(loaderContetnt, 1700);  

    firstLoad = false;
    firstLoad = String(firstLoad);
    
    localStorage.setItem("firstLoad", firstLoad);
}
else {
    $(".preloader").css("display", "none");
}

$(window).on("load", (): void => {
    setTimeout(loaderContetnt, 200);
});

// Animation show  

const reveal = (): void => {
    const revealBlocks: JQuery<Element> = $(".reveal-blocks"),
        revealTexts: JQuery<Element> = $(".reveal-texts"),
        windowHeight: number = page.innerHeight();

    for (let i: number = 0; i < revealBlocks.length; i++) {
        const elementTop: number = revealBlocks[i].getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            $(revealBlocks[i]).addClass("scrolled");
        }
    }

    for (let t: number = 0; t < revealTexts.length; t++) {
        const elementTop: number = revealTexts[t].getBoundingClientRect().top - 50;

        if (elementTop < windowHeight) {
            $(revealTexts[t]).attr("data-splitting", "words");
            $(revealTexts[t]).addClass("scrolled-text");
            Splitting();
        }
    }
};

page.on("scroll", reveal);