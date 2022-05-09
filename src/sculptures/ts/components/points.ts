import * as $ from "jquery";

const generateSliderPoints = () => {
    const allImages = $(".slider__images");

    for (let p:number = 0; p < allImages.length; p++) {
        let pointClass: string;

        p % 2 && p !== 0 ? pointClass = "points__point-big" : pointClass = "points__point";

        $(".points").append(`<div class=${pointClass}></div>`);
    }
};

generateSliderPoints();