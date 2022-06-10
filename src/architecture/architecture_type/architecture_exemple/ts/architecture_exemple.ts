import "./../scss/architecture_exemple.scss";
import "./../scss/adap/adap-architecture_exemple.scss";

import * as $ from "jquery";
import {updateScroller, onScroll, onResize} from "./../../../../ts/slowedScroll";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger.js";

const page = $(window);

// Loader animation

const loaderContetnt = (): void => {
    $("body").addClass("loadedPage");

    updateScroller();  
    page.focus();

    page.on("resize", onResize);
    page.on("scroll", onScroll);
};

loaderContetnt();

// Close 

const lastArchitectureType = localStorage.getItem("lastArchitectureType");

$(".scroll-container__close").on("click", (): void => {
    location.href = "architecture_type.html#" + lastArchitectureType;
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
    $(window).width() < 1000 ? TitleParalaxSpeed = 30 : TitleParalaxSpeed = 75;
}
  
ScrollTrigger.addEventListener("refreshInit", resize);
resize();

const paralax = (): void => {
    gsap.to("[data-speed]", {
        y: () => TitleParalaxSpeed * maxScroll(),
        scrollTrigger: {
            scrub: 1.3,
            invalidateOnRefresh: true
        }
    });
};

paralax();

// Go to top 

$(".toTop").on("click", (): JQuery<Element> => $("html").animate({scrollTop: 0}, 700));

// Paralax for description

gsap.utils.toArray(".description__block").forEach((description__block: any, i: number) => {
    console.log(description__block, i);
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