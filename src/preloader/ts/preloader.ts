import * as $ from "jquery";
import "/preloader/scss/preloader.scss";
import "/preloader/scss/adap.preloader.scss";

setTimeout((): void => {
    $(".preloader-1").css("display", "none");
    $(".preloader-2").fadeOut();
}, 1900);

$(window).on("load", (): void => {
    let preloadImageNum: number = 0, 
        cycleOfPictures: number = 0;

    setInterval((): void => {
        if (cycleOfPictures > 4) return;

        $(".preloader-1 img").removeClass("preloaderActiveImage");
        preloadImageNum++;
        $(".preloader__image-" + preloadImageNum).addClass("preloaderActiveImage");

        if (preloadImageNum >= 6 ) {
            preloadImageNum = 1;
            cycleOfPictures++;
            $(".preloader__image-1").addClass("preloaderActiveImage");
        }
    }, 175);
});