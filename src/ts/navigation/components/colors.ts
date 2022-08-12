import * as $ from "jquery";

const blackColor: string = "#0b0b0b", 
    whiteColor: string = "#fff";

const html: JQuery<Element> = $("html"),
    colors__icon: JQuery<Element> = $(".colors__icon");

// Get data from Local Storage
const checkTheme = (): void => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        addUserColor(blackColor, whiteColor, ".colors__white");
    } 
    else {
        addUserColor(whiteColor, blackColor, ".colors__black");
    }
};

const addUserColor = (color1: string, color2: string, activeIcon: string): void => {
    html.css({"--contrastColorWhite": color1, "--contrastColorBlack": color2});

    $(activeIcon).addClass("active-contrast-color");

    localStorage.setItem("contrastColor1LS", color2);
    localStorage.setItem("contrastColor2LS", color1);
    localStorage.setItem("activeColorContrastIcon", activeIcon);
};

const changeIcon = (): void => {
    let activeColor: string = localStorage.getItem("color");

    activeColor !== null ? activeColor = activeColor.substring(1) : activeColor = "ffc700";

    $("link[rel*='icon']").attr("href", "./../img/head/" + activeColor + "-activeIcon.webp");
};  

$(window).on("load", (): JQuery<Element> => html.css(
    "--transitionTime", "color 0.4s, background-color 0.4s, border-color 0.4s, -webkit-text-stroke 0.4s")
);

const contrastColor1LS: string = localStorage.getItem("contrastColor1LS"),
    contrastColor2LS: string = localStorage.getItem("contrastColor2LS"),
    mainColorLS: string = localStorage.getItem("color"),
    contrastActiveIconLS: string = localStorage.getItem("activeColorContrastIcon"),
    mainActiveIconLS: string = localStorage.getItem("activeColorMainIcon");

if (contrastColor1LS === null || contrastColor2LS === null) {
    checkTheme();
} 
else {
    html.css({"--contrastColorBlack": contrastColor1LS, "--contrastColorWhite": contrastColor2LS});
}

mainColorLS === null ? html.css("--mainColor", "#ffc700") : html.css("--mainColor", mainColorLS);

if (mainActiveIconLS || contrastActiveIconLS) {
    $(".colors__color").removeClass("active-main-color");

    if (mainActiveIconLS === null) $("#main-color1").addClass("active-main-color");

    $("#" + mainActiveIconLS).addClass("active-main-color");
    $(contrastActiveIconLS).addClass("active-contrast-color");
}

changeIcon();

// Check user white/dark theme

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (): void => checkTheme());

// Change main color

$(".colors__main .colors__color").on("click", function (): void {
    const color: string = $(this).attr("background"),
        colorsIcons: JQuery<Element> = $(".colors__color");

    $(".active-main-color").addClass("no-active-main-color");
    colorsIcons.removeClass("active-main-color");
    $(this).addClass("active-main-color");

    setTimeout((): void => {
        html.css("--mainColor", color);
        colorsIcons.removeClass("no-active-main-color");
    }, 50);

    localStorage.setItem("color", color);
    localStorage.setItem("activeColorMainIcon", $(this)[0].id);
    changeIcon();
});

// Change white/black theme

$(".colors__white").on("click", function (): void {
    $(this).addClass("active-contrast-color");
    changeColorOnClick(blackColor, whiteColor, ".colors__black", ".colors__white");
});

$(".colors__black").on("click", function (): void {
    $(this).addClass("active-contrast-color");
    changeColorOnClick(whiteColor, blackColor, ".colors__white", ".colors__black");
});

const changeColorOnClick = function (color1: string, color2: string, noActiveIcon: string, activeIcon: string): void {
    html.css({"--contrastColorWhite": color1, "--contrastColorBlack": color2});

    $(noActiveIcon).removeClass("active-contrast-color");

    localStorage.setItem("contrastColor1LS", color2);
    localStorage.setItem("contrastColor2LS", color1);
    localStorage.setItem("activeColorContrastIcon", activeIcon);
};

// Colors modal window position

const colorPosition = (): void => {
    const languagesHeight: number = $(".icon__color-main").position().top - 127;
    $(".colors__active").css("top", languagesHeight);
};

$(window).on("load", (): void => {
    colorPosition();
});

$(window).on("resize", (): void => colorPosition());

// Colors modal window show/hide

colors__icon.on("click", function (): void {
    if ($(this).hasClass("color-active")) {
        $(".colors__active").fadeOut(300);
        $(this).removeClass("color-active");
    }
    else {
        $(this).addClass("color-active");
        $(".colors__active").fadeIn(300);
        $(".colors__active").css("display", "flex");
    }
});

$("body").on("click", (e): void => {
    let clickColorIcon: number | string,
        clickColorActive: number | string,
        clickColorHeader: number | string;

    if (e.target.localName === "path" || e.target.localName === "svg") {
        $(".colors__active").fadeOut(300);
        colors__icon.removeClass("color-active");
    } 
    else {
        clickColorActive = e.target.className.indexOf("color");
        clickColorIcon = e.target.className.indexOf("navigation__color");
        clickColorHeader = e.target.className.indexOf("colors__head");

        if (clickColorIcon === 0 || clickColorActive === 0 || clickColorHeader === 0) return;
        else {
            $(".colors__active").fadeOut(300);
            colors__icon.removeClass("color-active");
        }
    }
});