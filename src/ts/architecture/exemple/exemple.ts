import "originSCSS/architecture/exemple/exemple.scss";
import "originSCSS/architecture/exemple/adap/adap-exemple.scss";

import * as $ from "jquery";
import {updateScroller, onScroll, onResize} from "originTS/global_scripts/slowedScroll";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger.js";

const page = $(window);

const key: string = location.href.split("#")[1];
$("body").attr("data-name", key);

// Loader animation

const loaderContetnt = (): void => {
    $("body").addClass("loadedPage");

    updateScroller();  
    // page.focus();

    page.on("resize", onResize);
    page.on("scroll", onScroll);
};

page.on("load", (): void => {
    setTimeout((): void => {
        loaderContetnt();
        paralax();
    }, 200);
});


// Close 

const lastArchitectureType = localStorage.getItem("lastArchitectureType");

$(".scroll-container__close").on("click", (): void => {

    $("body").addClass("exemplesToType");

    setTimeout((): void => {
        location.href = "type.html#" + lastArchitectureType;
    }, 300);

});

// Paralax 

gsap.registerPlugin(ScrollTrigger);

const maxScroll = (): number => {
    const endOfParalax = document.querySelector(".scroll-container__years"),
        maxScrollNum: number = ScrollTrigger.maxScroll(endOfParalax);
    return maxScrollNum;
};

let TitleParalaxSpeed = 75;

function resize() {
    if ($(window).width() < 1000) {
        TitleParalaxSpeed = 0;
    } 
    else {
        TitleParalaxSpeed = 75;
    }
}
  
ScrollTrigger.addEventListener("refreshInit", resize);
resize();

const paralax = (): void => {
    gsap.to("[data-speed]", {
        y: () => TitleParalaxSpeed * maxScroll(),
        scrollTrigger: {
            scrub: 1.3,
            invalidateOnRefresh: true,
            start: "top top",
            end: "bottom"
        }
    });
};

paralax();

// Go to top 

$(".toTop").on("click", (): JQuery<Element> => $("html").animate({scrollTop: 0}, 700));

// Paralax for description

gsap.utils.toArray(".description__block").forEach((description__block: any) => {
    gsap.to(description__block, {
        backgroundPositionY: "50%",
        ease: "none",
        scrollTrigger: {
            trigger: description__block,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }
    });
});

// Add way for images

const getExempleImages = (): void => {
    const allBlocks: JQuery<Element> = $(".description__block"),
        allImages: JQuery<Element> = $(".block__image");

    for (let i: number = 0; i < allImages.length; i++) {
        $(allImages[i]).attr("src", `img/architecture/architecture_exemple/descriptions_images/${key}/${key}-${[i]}.webp`);
        $(allBlocks[i]).css("background-image", `url(img/architecture/architecture_exemple/descriptions_images/${key}/backgrounds/bg-${key}-${[i]}.webp)`);
    }

    $(".big_image__img").attr("src", `img/architecture/architecture_exemple/big_images/${key}.webp`);
};

getExempleImages();