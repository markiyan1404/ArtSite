import * as $ from "jquery";

// Picting slider

let imageNum: number = 1;
const pictingsImages: JQuery<Element> = $(".images__img");

const nextSlide = (): void => {
    const checkActiveImage: boolean = pictingsImages.hasClass("images__img-NOactive") || pictingsImages.hasClass("images__img-prev-NOactive");

    if (checkActiveImage) return;
    else {
            removeFromSlideClass();

            imageNum++;
            if (imageNum === 6) imageNum = 1;

            let noActiveImage: string = "";
            imageNum === 1 ? noActiveImage = ".images__img-" + 5 : noActiveImage = ".images__img-" + (imageNum - 1);

            addToSlideClass(noActiveImage, "images__img-NOactive", "images__img-active");
        }
};


const prevSlide = (): void => {
    const checkActiveImage: boolean = pictingsImages.hasClass("images__img-NOactive") || pictingsImages.hasClass("images__img-prev-NOactive");

    if (checkActiveImage) return;
    else {
            removeFromSlideClass();

            imageNum--;
            if (imageNum === 0) imageNum = 5;

            let noActiveImage: string = "";
            imageNum === 5 ? noActiveImage = ".images__img-" + 1 : noActiveImage = ".images__img-" + (imageNum + 1);

            addToSlideClass(noActiveImage, "images__img-prev-NOactive", "images__img-prev-active");
        }
};

const removeFromSlideClass = () => {
    $(pictingsImages).removeClass("images__img-active images__img-prev-active");
    $(".text-paint__name").removeClass("text-paint__name-active");
    $(".text-paint__cost").removeClass("text-paint__cost-active");
    $(".text-paint__description").removeClass("text-paint__description-active");
};

const addToSlideClass = (noActiveImage, noActiveClass, activeClass) => {
    $(".text-paint__name-" + imageNum).addClass("text-paint__name-active");
    $(".text-paint__cost-" + imageNum).addClass("text-paint__cost-active");
    $(".text-paint__description-" + imageNum).addClass("text-paint__description-active");
    $(".images__img-" + imageNum).addClass(activeClass);
    
    $(noActiveImage).addClass(noActiveClass);
    setTimeout(() => $("." + noActiveClass).removeClass(noActiveClass), 1000);

    $(".image-paint__number").html("0" + imageNum + "/05");
};

$(".image-paint__prev").on("click", prevSlide);
$(".image-paint__next").on("click", nextSlide);

// Generate background Blocks

for(let i: number = 0; i < 23; i++) {
    $(".window-2__end").append("<span class='end__block'></span>");
}
