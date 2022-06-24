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
        speedAnim: number = 70;
    let blockNum = 0;

    $(allBlocks[0]).addClass("block-anim");
    const addClassToLines: NodeJS.Timer = setInterval((): void => {

        $(allBlocks[blockNum]).addClass("block-anim");
        blockNum++;
    }, speedAnim); 

    setTimeout((): void => clearInterval(addClassToLines), speedAnim * allBlocks.length);
};

// Background image

const getActiveImage = function (element): string {
    return $(element.lastChild).attr("src").split("/").pop().split(".")[0]; 
};


$(".image-section__block").on("mouseenter", function (): void {
    if (page.width() <= 1000) return;
    $(".background").addClass("background-active");
    $(".background").attr({"src": `./img/architecture/backgrounds/${getActiveImage(this)}_bg.webp`});
});

$(".image-section__block").on("mouseleave", (): void => {
    $(".background").removeClass("background-active");
});

// Link to type of architecture

$(".image-section__block").on("click", function (): void {
    const allBlocks: JQuery<Element> = $(".image-section__block"),
        getLastBlockOpacity: string = $(allBlocks[allBlocks.length-1]).css("opacity");

    if (getLastBlockOpacity !== "1" ) return;

    $("body").addClass("architectureToarchitecture_type");
    $(".image-section__block").css("animation", "image-section__block 0.5s reverse forwards");
    setTimeout((): void => {
        location.href = "architecture_type.html#" + getActiveImage(this);
    }, 550);
});