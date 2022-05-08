import * as $ from "jquery";

// Sculptures slider

let sculpturesNum: number = 2;

$(".point__child").on("click", function(): void {
    $(".point__child").removeClass("point__child-active");
    $(this).addClass("point__child-active");

    sculpturesNum = parseInt(this.className[26]);
    chengSculture();
});

const chengSculture = () => {
    $(".next-slide__image").removeClass("next-slide__image-active");
    $(".images__sculptur").removeClass("images__sculptur-active");
    $(".description__text").removeClass("description__text-active");
    $(".description__header").removeClass("description__header-active");
    $(".point__child").removeClass("point__child-active");
    
    if (sculpturesNum === 6) sculpturesNum = 1;

    if (sculpturesNum === 5) $(".next-slide__image-" + 1).addClass("next-slide__image-active");
    else $(".next-slide__image-" + (sculpturesNum + 1)).addClass("next-slide__image-active");

    $(".description__text-" + sculpturesNum).addClass("description__text-active");
    $(".description__header-" + sculpturesNum).addClass("description__header-active");
    $(".images__sculptur-" + sculpturesNum).addClass("images__sculptur-active");
    $(".point__child-" + sculpturesNum).addClass("point__child-active");

    sculpturesNum++;
};

$(".next-slide__arrow").on("click", chengSculture);