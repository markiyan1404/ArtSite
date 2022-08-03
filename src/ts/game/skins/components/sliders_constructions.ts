import * as $ from "jquery";
import {Swiper} from "swiper";

export const createSlider = (mainBlock, wrapper, sliders): void => {
    new Swiper(mainBlock, {
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
            dragSize: 25
        },
    
        mousewheel: {
            eventsTarget: wrapper,
            invert: true
        },
    
        slidesPerView: sliders,
        initialSlide: 0,
        centeredSlides: true,
        freeMode: true,
        speed: 400,
        touchStartPreventDefault: null,
        touchStartForcePreventDefault: null,
        preloadImages: false,
        observeParents: true,
        observeSlideChildren: true,
        observer: true,
        spaceBetween: 30,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3
        },
    
        breakpoints: {
            3200: {
                slidesPerView: sliders,
                scrollbar: {
                    dragSize: 35
                }
            },
            
            1200: {
                slidesPerView: sliders,
                scrollbar: {
                    dragSize: 25
                }
            },
            1000: {
                slidesPerView: sliders,
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
                }
            },
            767: {
                slidesPerView: sliders,
                scrollbar: {
                    dragSize: 20
                },
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
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
                    loadPrevNextAmount: 3
                }
            },
            0: {
                slidesPerView: 1.5,
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
                }
            },
    
            "@0.74": {
                slidesPerView: 2.5
            }
        },
    
        on: {            
            scrollbarDragStart: () => {    
                $(".cursor, #cursor").css("opacity", "0");
                $(".cursor").removeClass("activeCursor");
            },
    
            scrollbarDragEnd: () => {
                $(".cursor, #cursor").css("opacity", "1");
            }
        }
    });

    setTimeout((): void => {
        $(".swiper-slide__image").addClass("slider__img-horizontal").removeClass("slider__img-vertical");
    });
};