import "originSCSS/game/skins/skins.scss"; 
import "originSCSS/game/skins/adap/adap-skins.scss"; 
import "swiper/css";

import * as $ from "jquery";
import "./components/slider";
import "./components/skin_section";
import "./components/change_img_color";

// Choose section of skins 

$(".content__skins").on("click", (): void => {
    $(".content__character").fadeIn();
    $(".content__character").css("display", "flex");
});