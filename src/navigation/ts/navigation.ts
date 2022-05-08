import * as $ from "jquery";
import "../scss/navigation.scss";
import "../scss/adap/adap-navigation.scss";

// Main blocks and menu width

const contentWidth = (): void => {
    const menuHeight: number = $(window).height() - $(".navigation").outerHeight(),
        mainBlocks: JQuery<Element> = $(".menu, .anim-show, .content");

    if ($(window).width() >= 1000) {
        mainBlocks.css({"width": "96%", "top": "0"});
        $(".menu, .content").css("height", "-webkit-fill-available");
    }

    if ($(window).width() <= 1000 || $(window).width() <= 1400 && $(window).height() > 900) {
        mainBlocks.css({"width": "100vw", "top": $(".navigation").outerHeight()});
        $(".menu, .content").css({"height": menuHeight, "top": $(".navigation").outerHeight()});
    }
};

$(window).on("resize", contentWidth);
contentWidth();