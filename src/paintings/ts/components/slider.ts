import * as $ from "jquery";
import {allPaintingsName, allAuthorsName} from "./data-name";

import {
    Swiper,
    Scrollbar,
    Mousewheel,
    Lazy
} from "swiper";

const page: JQuery<Window & typeof globalThis> = $(window);

// Generate paintings

page.on("load", (): any => {
    for (let p: number = 0; p < allPaintingsName.length; p++) {
        $(".swiper-wrapper").append(`<section class="swiper-slide swiper-slide-${p}"></section>`); 

        $(`.swiper-slide-${p}`).append(`<img data-src="./img/paintings/${allPaintingsName[p]}.webp" data-name="${allPaintingsName[p]}" data-author="${allAuthorsName[p]}">`);
        $(".swiper-slide img").addClass("swiper-lazy swiper-slide__image-NOactive swiper-slide__image mouse-active");
        
        $(`.swiper-slide-${p}`).append("<div class='swiper-lazy-preloader'></div>");
        $(`.swiper-slide-${p}`).append(`<p class="language" data-key="paintingName${p}"></p>`);
    }
});

const activeSwipePainting = (): number => {
    const lastPainting: string | null = localStorage.getItem("lastPainting");
    if (lastPainting) return Number(lastPainting);

    else {
        const activeCentralPaint: number = Math.floor($(".swiper-slide__image").length / 2);
        return activeCentralPaint;
    }
};

page.on("load", (): void => {
    Swiper.use([Scrollbar, Mousewheel, Lazy]);

    new Swiper(".swiper-container", {
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
            dragSize: 25
        },
    
        mousewheel: {
            eventsTarget: ".swiper-slide",
            invert: true
        },
    
        slidesPerView: 4,
        initialSlide: activeSwipePainting(),
        centeredSlides: true,
        freeMode: true,
        speed: 600,
        touchStartPreventDefault: null,
        touchStartForcePreventDefault: null,
        preloadImages: false,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 5
        },
    
        breakpoints: {
            3200: {
                slidesPerView: 4,
                scrollbar: {
                    dragSize: 35
                }
            },
            
            1200: {
                slidesPerView: 4,
                scrollbar: {
                    dragSize: 25
                }
            },
            1000: {
                slidesPerView: 4,
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 6
                }
            },
            767: {
                slidesPerView: 3,
                scrollbar: {
                    dragSize: 20
                },
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 6
                }
            },
            500: {
                slidesPerView: 2.2,
                scrollbar: {
                    dragSize: 20
                },
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 6
                }
            },
            0: {
                slidesPerView: 1.5,
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 6
                }
            },
    
            "@0.74": {
                slidesPerView: 2.5
            }
        },
    
        on: {
            touchMove: () => {
                $(".swiper-lazy").removeClass("swiper-slide__image-NOactive");
                $(".swiper-slide").addClass("swiper-slide-activeSwipe");
    
            },
            touchEnd: () => {
                $(".swiper-lazy").addClass("swiper-slide__image-NOactive");
                $(".swiper-slide").removeClass("swiper-slide-activeSwipe");
            },
    
            
            scrollbarDragStart: () => {
                $(".swiper-lazy").removeClass("swiper-slide__image-NOactive");
                $(".swiper-slide").addClass("swiper-slide-activeSwipe");
    
                $(".cursor, #cursor").css("opacity", "0");
                $(".cursor").removeClass("activeCursor");
            },
    
            scrollbarDragEnd: () => {
                $(".swiper-lazy").addClass("swiper-slide__image-NOactive");
                $(".swiper-slide").removeClass("swiper-slide-activeSwipe");
    
                $(".cursor, #cursor").css("opacity", "1");
            },
    
            activeIndexChange: (): void => {
                setTimeout((): void => {
                    const getActivePaintingName: string = $($(".swiper-slide-active")[0].firstChild).attr("data-name");
    
                    localStorage.setItem("lastPaintingName", getActivePaintingName);
                    localStorage.setItem("lastPainting", lastActivePaintingLS());
                }, 500);
            }
        }
    });
});

const allPaintings = (): string[] => {
    const allPaintingsLS: string = localStorage.getItem("allPaintings"),
        allPaintings: string[] = allPaintingsLS.split(",");

    return allPaintings;
};

const lastActivePaintingLS = (): string => {
    const lastPaintingLS: string = localStorage.getItem("lastPaintingName"),
        lastPainting: string = String(allPaintings().indexOf(lastPaintingLS)),
        lastPaintingName: string = allPaintings()[lastPainting];

    localStorage.setItem("lastPainting", lastPainting); 
    localStorage.setItem("lastPaintingName", lastPaintingName);

    return lastPainting;
};

const paintingNum = (): void => {
    const paintingName: string[] = [],
        authorName: string[] = [];

    const paintings = $(".swiper-slide__image");

    for (let p: number = 0; p < paintings.length; p++) {
        paintingName.push($(paintings[p]).attr("data-name"));
    }
    
    for (let a: number = 0; a < allAuthorsName.length; a++) {
        authorName.push($(paintings[a]).attr("data-author"));
    }
    
    const cleanAuthorName: string[] = [...new Set(authorName)];

    localStorage.setItem("allPaintings", String(paintingName));
    localStorage.setItem("allAuthors", String(cleanAuthorName));
};  

page.on("load", (): void => paintingNum());