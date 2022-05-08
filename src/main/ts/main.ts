import * as $ from "jquery";
import "/main/scss/main.scss";
import "/main/scss/adap/adap-main.scss";
import * as Splitting from "splitting";
import {updateScroller, onScroll, onResize} from "../../ts/slowedScroll";

import "./components/window-1";
import "./components/window-2";
import "./components/window-3";
import "./components/window-4";
import "./components/window-5";
import "/preloader/ts/preloader";

const page = $(window);

// Loader animation

const loaderContetnt = (): void => {
    $("body").addClass("loadedPage");

    updateScroller();  
    page.focus();

    page.on("resize", onResize);
    page.on("scroll", onScroll);

    $(".window-1").attr("data-splitting", "words");
    Splitting();
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
    setTimeout(loaderContetnt, 200);  
}

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