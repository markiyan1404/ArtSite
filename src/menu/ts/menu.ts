import * as $ from "jquery";
import "/menu/scss/menu.scss";
import "/menu/scss/adap-menu.scss";

// Add active class

const addActiveClassToMenu = () => {
    const pageName: string = $("body").attr("data-menu");

    $(".navigation__menu, .text__button-footer").on("click", (): void => {
       setTimeout((): void => {
            const activeMenuSection: JQuery<Element> = $(".menu__section-" + pageName);
            activeMenuSection.addClass("active-menu__child");

            setTimeout((): JQuery<Element> => activeMenuSection.css("transition", "$colorTransition"), 300);
            $("body").css("overflow", "hidden");
       }, 1500);
    });
};
addActiveClassToMenu();

// Remove active class

$(".navigation__clouse").on("click", (): void => {
    setTimeout((): JQuery<Element> => $(".active-menu__child").removeClass("active-menu__child"), 1000);
    setTimeout((): JQuery<Element> => $(".anim-show").removeClass("anim-show-close"), 1500);

    $("body").css("overflow-y", "auto");
    $(".navigation__menu").addClass("notActiveMenuIcon");
});

// Link click 

$(".menu__section").on("click", function () {
    let nameNextPage: string = $(this).children().attr("data-key");
    const getActivePage: string = $(".active-menu__child").children().attr("data-key");

    if (getActivePage === nameNextPage) return;

    $(".anim-show1").addClass("menu-click");
    setTimeout((): JQuery<Element> => $(".anim-show2").addClass("menu-click"), 2200);
    $(".cursor, #cursor, .progress-wrap").addClass("close-cursor");
    $(".navigation__clouse").css("display", "none");
    $(".navigation__menu").addClass("notActiveMenuIcon").css("display", "flex");

    const contentNextPage: string = $(this).children().html();
    $(".anim-show1").append(`<h1 data-text="${contentNextPage}" class="anim-show1__text">${contentNextPage}</h1>`);
    
    if (nameNextPage === "main") nameNextPage = "index";
    setTimeout((): string => location.href = `./${nameNextPage}.html`, 3100);
}); 

