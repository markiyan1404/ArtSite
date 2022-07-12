import * as $ from "jquery";

const menuShow: JQuery<Element> = $(".anim-show"),
    animShow1: JQuery<Element> = $(".anim-show1"),
    navigationMenuAndClouse: JQuery<Element> = $(".navigation__menu, .navigation__clouse");

// Show menu animation

const menuShowAnim = (): void => {
    menuShow.removeClass("anim-show-default anim-show-close");
    setTimeout(() => $(".anim-show1").addClass("anim-show-active"), 10);
    setTimeout(() => $(".anim-show2").addClass("anim-show-active"), 150);
    setTimeout(() => menuShow.addClass("anim-show-default"), 800);
    setTimeout(() => menuShow.removeClass("anim-show-active"), 1000);
};

// Hide menu animation

const menuHide = (): void => {
    menuShow.removeClass("anim-show-default anim-show-close");
    animShow1.addClass("anim-show-close");
    setTimeout(() => $(".anim-show2").addClass("anim-show-close"), 150);
    setTimeout(() => menuShow.fadeOut(300), 900);
    setTimeout(() => $(".menu, .anim-show1").css("display", "none"), 800);
};

// No spam click

const noClickMenuIcon = (): void => {
    $(".navigation__menu, .navigation__clouse").attr("value", "true");
    setTimeout((): JQuery<Element> => $(".navigation__menu, .navigation__clouse").attr("value", "false"), 1200);
};

// Show menu

$(".navigation__menu").on("click", (): void => showMenu());

export const showMenu = (): void => {
    const noClickBlocks: string = $(".navigation__menu, .navigation__clouse").attr("value");

    if (noClickBlocks === "true") return;
    else {
        noClickMenuIcon();
        menuShowAnim();

        $(".navigation__clouse, .anim-show").css("display", "flex");
        $(".navigation__menu").css("display", "none");
        setTimeout((): JQuery<Element> => $(".menu").css("display", "flex"), 800);
    }
};

// Hide menu

$(".navigation__clouse").on("click", function (): void {
    const noClickBlocks: string = navigationMenuAndClouse.attr("value");

    if (noClickBlocks === "true") return;
    else {
        noClickMenuIcon();
        menuHide();

        $(".navigation__menu").css("display", "flex");
        $(this).css("display", "none");

        setTimeout((): JQuery<Element> => $(".active-menu__child").removeClass("active-menu__child"), 1000);
        setTimeout((): JQuery<Element> => $(".anim-show").removeClass("anim-show-close"), 1500);
    
        $("body").css("overflow-y", "auto");
        $(".navigation__menu").addClass("notActiveMenuIcon");
    }
});