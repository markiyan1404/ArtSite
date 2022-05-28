import * as $ from "jquery";
import "/paintings/scss/paintings.scss";
import "/paintings/scss/adap/adap-paintings.scss";
import "swiper/css";
import "./components/slider";
import "./components/linkToAuthor";

const page: JQuery<Window & typeof globalThis> = $(window),
    cursor: JQuery<HTMLElement> = $(".cursor, #cursor");

// Adap paintings 

const contentWidth = (): void => {
    const contentWidth: number = $("body").width() - $(".navigation").width();

    if (page.width() >= 1000) $(".swiper-container").css("width", contentWidth);
    if (contentWidth === 0 || page.width() < 1000) $(".swiper-container").css("width", "100%");
};

page.on("resize", contentWidth);
page.on("load", contentWidth);

// Link to painting 

page.on("load", (): void => {
    $(".swiper-slide__image-NOactive").on("click", function (): void {
        $(".anim-show1").addClass("painting-click");
        $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");
        setTimeout((): JQuery<Element> => $(".anim-show2").addClass("painting-click"), 700);
    
        setTimeout((): void => {
            localStorage.setItem("typePaintingAnim", "paintingsToPainting");

            const namePicting: string = $(this).attr("data-name");
            location.href = "painting.html#" + namePicting;
        }, 1500);
    });
});

// Load animation

setTimeout((): JQuery<Element> => $(".swiper-slide").css("opacity", "1").css("animation", "none"), 1000);
$(".swiper-slide-active").css("animation-delay", "0.15s");

setTimeout((): JQuery<Element> => cursor.css("opacity", "1"), 300);