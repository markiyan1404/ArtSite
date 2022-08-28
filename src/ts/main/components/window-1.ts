import * as $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger.js";


const page = $(window);

// Scroll button

page.on("load", (): void => {
    $(".window-1__button").on("click", (): void => {
        const windowWidth: number = page.width();

        let window2Top: number = $(".window-2").offset().top;

        if (windowWidth <= 1000 || 
            windowWidth > 900 && windowWidth < 1400 && page.height() > 900 && page.height() < 1600) {
                
            const windowHeight: number = page.height() * 0.06;
            window2Top = $(".window-2").offset().top - windowHeight;
        }
      
        $("html").animate({scrollTop: window2Top}, 700);
    });
});

// Paralax

page.on("load", (): void => {
    if (page.width() >= 1000) {
        startParalax();
    }
});

page.on("resize", (): void => {
    if (page.width() >= 1000) {
        startParalax();
    }
});

const startParalax = (): void => {
    gsap.registerPlugin(ScrollTrigger);

    const backgroundImage: JQuery<Element> = $(".window-1");
    
    gsap.to(backgroundImage, {
        backgroundPositionY: "40%",
        ease: "none",
        scrollTrigger: {
            trigger: backgroundImage,
            start: "+=0px",
            end: "bottom top",
            scrub: 1.5
        }
    });
};