import "originSCSS/architecture/type/type.scss";
import "originSCSS/architecture/type/adap/adap-type.scss";

import * as $ from "jquery";

const key: string = location.href.split("#")[1];
$("body").attr("data-name", key);


// Add botttom blocks size

const bottomBlocksSize = (): void => {
    const blocksWidth: number = $(".image-section__block").width();

    $(".image-section__block").css("height", blocksWidth);
};

$(window).on("load", (): void => bottomBlocksSize());
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

$(window).on("load", (): void => yearsPosition());
$(window).on("resize", (): void => yearsPosition());

// Close page 

$(".content__close").on("click", (): void => {
    $("body").addClass("typeToexemples");

    setTimeout((): void => {
        location.href = "architecture.html";
    }, 400);
});

// Link to example

$(".image-section__block").on("click", function (): void {
    localStorage.setItem("lastArchitectureType", key);

    $("body").addClass("typeToexemples");
    setTimeout((): void => {
        location.href = `architecture_exemple.html#${$(this).attr("data-link")}`;
    }, 400);
});

// Get exemple images and link

const getExempleImages = (): void => {
    import(`origin/content/architecture/type/${key}.json`).then(langJSON => {
        const imagesNames: object = langJSON.default.specifical,
            allImages: JQuery<Element> = $(".image-section__block");

        for (let i: number = 0; i < allImages.length; i++) {
            $(allImages[i]).css("background-image", `url(img/architecture/type/exemples/${key}/${Object.values(imagesNames)[i]}.webp)`);

            $(allImages[i]).attr("data-link", Object.values(imagesNames)[i]);
        }
        
    }); 
};

getExempleImages();

// Get big image 

const getBigImage = (): void => {
    $(".content__main_image").css("background-image", `url(img/architecture/type/big_images/${key}.webp`);
};

getBigImage();