import * as $ from "jquery";

const allImages: JQuery<Element> = $(".slider__images"),
    activeClass: string = "slider__images-active";
$(window).on("click", () => {

    if (getActiveImage() + 1 >= allImages.length) {
        $(allImages[0]).addClass(activeClass);
        $(allImages[allImages.length-1]).removeClass(activeClass);
    } 
    else {
        $(allImages[getActiveImage()+1]).addClass(activeClass);
        $(allImages[getActiveImage()]).removeClass(activeClass);
    }
});

const getActiveImage = () => {
    for (let i: number = 0; i<allImages.length; i++) {
        if (allImages[i].classList.value.indexOf(activeClass) !== -1) {
            return i;
        }
    }
};