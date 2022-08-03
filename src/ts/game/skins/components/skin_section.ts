import * as $ from "jquery";

// Remove and add animation for sections

$(window).on("load", (): void => {
    setTimeout((): void => {
        $(".content__skins").css({animation: "none", transition: "0.3s", transform: "scale(1)"});
    }, 600);
});

// Close 

$(".content__close").on("click", (): void => {
    if ($(".content__character").css("display") !== "none") {
        $(".content__character").fadeOut(400);

        setTimeout((): void => {
            $(".swiper-container").css("display", "none");
        }, 500);
    } 
    else {
        $(".content").fadeOut(300);

        setTimeout((): void => {
            location.href = "./game.html";
        }, 400);
    }
});