import "./../scss/architecture.scss";
import "./../scss/adap-architecture.scss";
import * as $ from "jquery";

const page: JQuery<Window & typeof globalThis> = $(window);

// Adaptation

const jumpBlock = (): void => {
    const fistBlock: JQuery<Element> = $(".image-section__jump-block1"),
        checkChanges: number = $(".content__image-section")[1].childNodes.length;

    if ($(window).width() <= 1000 && checkChanges === 3) {
        $($(".content__image-section")[2]).append(fistBlock);
    }
    else if ($(window).width() > 1000 && checkChanges === 2) {
        $($(".content__image-section")[1]).append(fistBlock);
    }
};

page.on("load", (): void => jumpBlock());
page.on("resize", (): void => jumpBlock());

// Add active class

page.on("load", () => {
    addAnimClass();
});

const addAnimClass = (): void => {
    const allBlocks = $(".image-section__block"),
        speedAnim: number = 100;
    let blockNum2 = 0;

    // $(allBlocks[0]).addClass("block-anim");
    // const addClassToLines: NodeJS.Timer = setInterval((): void => {

    //     $(allBlocks[blockNum]).addClass("block-anim");
    //     blockNum++;
    // }, speedAnim); 

    setTimeout(() => {
        const addClassToLines2: NodeJS.Timer = setInterval((): void => {
            $(allBlocks[blockNum2]).css({
                "animation": "none", 
                "opacity": 1
            });
            blockNum2++;
        }, speedAnim * 1.2);

        setTimeout((): void => clearInterval(addClassToLines2), speedAnim * 2.5 * allBlocks.length);
    }, speedAnim * 2.5);
};

// Background image

const getActiveImage = function (element): string {
    return $(element.lastChild).attr("src").split("/").pop().split(".")[0]; 
};


// $(".image-section__block").on("mouseenter", function (): void {
//     if (page.width() <= 1000) return;
//     $(".background").attr({"src": `./img/architecture/${getActiveImage(this)}_bg.webp`}).css({"display": "block", "opacity": 0.1});
// });

// $(".image-section__block").on("mouseleave", (): void => {
//     $(".background").css("opacity", "0");
// });

// Link to type of architecture

$(".image-section__block").on("click", function (): void {
    $("body").addClass("architectureToarchitecture_type");
    $(".image-section__block").css("animation", "image-section__block 0.5s reverse forwards");
    setTimeout((): void => {
        location.href = "architecture_type.html#" + getActiveImage(this);
    }, 500);
});