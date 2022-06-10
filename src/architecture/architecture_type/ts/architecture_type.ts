import "./../scss/architecture_type.scss";
import "./../scss/adap/adap-architecture_type.scss";

import * as $ from "jquery";

const key: string = location.href.split("#")[1];
$("body").attr("data-name", key);


// Add botttom blocks size

const bottomBlocksSize = (): void => {
    const blocksWidth: number = $(".image-section__block").width();

    $(".image-section__block").css("height", blocksWidth);
};

bottomBlocksSize();

$(window).on("resize", (): void => bottomBlocksSize());

// Years position 

const yearsPosition = (): void => {
    if ($(window).width() > 12000 ) {
        $("body, .content").scrollTop();
        return;
    }
        
    const bigImageWidth: number = $(".content__main_image").width() / 2;

    $(".content__years").css("width", bigImageWidth);
};

yearsPosition();

$(window).on("resize", (): void => yearsPosition());

// Close page 

$(".content__close").on("click", (): void => {
    location.href = "architecture.html";
});

// Link to example

const getActiveImage = function (element): string {
    return $(element.lastChild).attr("src").split("/").pop().split(".")[0]; 
};

$(".image-section__block").on("click", function (): void {
    localStorage.setItem("lastArchitectureType", key);

    location.href = `architecture_exemple.html#${getActiveImage(this)}`;
    console.log(getActiveImage(this));
});