import * as $ from "jquery";
import {Swiper} from "swiper";

export const createSlider = (mainBlock, wrapper, slidersStandart, sliders0, sliders600, sliders1000, sliders1600): void => {
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
    
        slidesPerView: slidersStandart,
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
                slidesPerView: slidersStandart,
                scrollbar: {
                    dragSize: 35
                }
            },
            
            1600: {
                slidesPerView: sliders1600,
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
                }
            },

            1000: {
                slidesPerView: sliders1000,
                scrollbar: {
                    dragSize: 25
                },
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
                }
            },

            600: {
                slidesPerView: sliders600,
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
                }
            },

            400: {
                slidesPerView: sliders0,
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
                slidesPerView: sliders0,
                scrollbar: {
                    dragSize: 20
                },
                lazy: {
                    loadPrevNext: true,
                    loadOnTransitionStart: true,
                    loadPrevNextAmount: 3
                }
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