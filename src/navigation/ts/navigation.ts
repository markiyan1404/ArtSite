import * as $ from "jquery";
import "../scss/navigation.scss";
import "../scss/adap/adap-navigation.scss";

// Main blocks and menu width

const contentWidth = (): void => {
    const menuHeight: number = $(window).height() - $(".navigation").outerHeight(),
        mainBlocks: JQuery<Element> = $(".menu, .content"),
        animShow: JQuery<Element> = $(".anim-show");

    if ($(window).width() >= 1000) {
        mainBlocks.css({"width": "96%", "top": "0", "height": "-webkit-fill-available"});
        $(".anim-show").css({"width": "96%", "top": "0"});
    }

    if ($(window).width() <= 1000 || $(window).width() <= 1400 && $(window).height() > 900) {
        mainBlocks.css({"width": "100vw", "top": $(".navigation").outerHeight(), height: menuHeight});
    }
};

$(window).on("resize", contentWidth);
$(window).on("load", (): void => contentWidth());