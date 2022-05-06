import * as $ from "jquery";
import ImageZoom from "js-image-zoom";


interface zoom { 
    width: number; 
    zoomWidth: number; 
    offset: { 
        vertical: number; 
        horizontal: number; 
    }; 
}

const page: JQuery<Window & typeof globalThis> = $(window),
      zoomArea: JQuery<HTMLElement> = $(".js-image-zoom__zoomed-area"),
      zoomImage: JQuery<HTMLElement> = $(".js-image-zoom__zoomed-image"),
      informationImage: JQuery<HTMLElement> = $("#information__image"),
      phone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;

// Zoom image

const imageSize = (): number => {
    const size: number = $(".content__information").width() * 0.33;
    return size;
};

const zoom = (): void => {
    const options: zoom = {
        width: imageSize(),
        zoomWidth: imageSize(),
        offset: {vertical: 0, horizontal: 10},
    };
    
    $(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove();
    new ImageZoom(document.getElementById("information__image"), options);
};

page.on("load", (): void => {
    zoom();
    $(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove();
    setTimeout((): void => zoom(), 700);
});

page.on("resize", (): NodeJS.Timeout => setTimeout((): void => zoom(), 50));

informationImage.on("mousemove", function (e): void {
    const checkPhone = phone.test(navigator.userAgent);

    if (checkPhone || page.width() <= 1000) {
        $(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove();
    } else {
        const zoomImageiD = document.getElementById("js-image-zoom__zoomed-image");

        if ($(e.target).hasClass("js-image-zoom__zoomed-image")) { 
            hideZoomImage(zoomImageiD);

            $(".cursor, #cursor").removeClass("activeCursore2"); 
            return;
        }

        $(".js-image-zoom__zoomed-image").attr("id", "js-image-zoom__zoomed-image");
    
        if(zoomImageiD) zoomImageiD.style.setProperty("display", "block", "important");
        
        removeAddActiveClass("zoom-area-NoActive", "zoom-area-active", "zoom-image-Noactive", "zoom-image-active");
    }
});

informationImage.on("mouseleave", function (e): void {
    const checkPhone = phone.test(navigator.userAgent);

    if (checkPhone || page.width() <= 1000) {
        $(".js-image-zoom__zoomed-area, .js-image-zoom__zoomed-image").remove();
    } else {

        $(zoomImage).attr("id", "js-image-zoom__zoomed-image");
        const zoomImageiD: HTMLElement = document.getElementById("js-image-zoom__zoomed-image");
    
        hideZoomImage(zoomImageiD);
        $(".cursor, #cursor").removeClass("activeCursore2"); 

        if ($(e.target).hasClass("js-image-zoom__zoomed-image")) return;
    
        removeAddActiveClass("zoom-area-active", "zoom-area-NoActive", "zoom-image-active", "zoom-image-Noactive");
    }
});

const removeAddActiveClass = (removeClass1: string, addClass1: string, removeClass2: string, addClass2: string) => {
    const zoomArea: JQuery<HTMLElement> = $(".js-image-zoom__zoomed-area"),
          zoomImage: JQuery<HTMLElement> = $(".js-image-zoom__zoomed-image");

    zoomArea.removeClass(removeClass1).addClass(addClass1);
    zoomImage.removeClass(removeClass2).addClass(addClass2);
};  

const hideZoomImage = (zoomImageiD) => {
    setTimeout((): void => {
        zoomImageiD.style.setProperty("display", "none", "important");
        $(".js-image-zoom__zoomed-image").removeClass("zoom-image-Noactive");
    }, 150);
};