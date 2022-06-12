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
        
    const bigImageWidth: number = $(".content__main_image").width() / 1.8;

    $(".content__years").css("width", bigImageWidth);
};

yearsPosition();

$(window).on("resize", (): void => yearsPosition());

// Close page 

$(".content__close").on("click", (): void => {
    location.href = "architecture.html";
});

// Link to example

$(".image-section__block").on("click", function (): void {
    localStorage.setItem("lastArchitectureType", key);

    location.href = `architecture_exemple.html#${$(this).attr("data-link")}`;
});

// Get exemple images and link

const getExempleImages = (): void => {
    import(`../content/${key}.json`).then(langJSON => {
        const imagesNames: object = langJSON.default.specifical,
            allImages: JQuery<Element> = $(".image-section__block");

        for (let i: number = 0; i < allImages.length; i++) {
            $(allImages[i]).css("background-image", `url(img/architecture/architecture_type/exemples/${key}/${Object.values(imagesNames)[i]}.webp)`);

            $(allImages[i]).attr("data-link", Object.values(imagesNames)[i]);
        }
        
    }); 
};

getExempleImages();

// Get big image 

const getBigImage = (): void => {
    $(".content__main_image").css("background-image", `url(img/architecture/architecture_type/big_images/${key}.webp`);
};

getBigImage();