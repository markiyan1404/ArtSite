import * as $ from "jquery";

// Change images color

$(window).on("load", (): void => {
    const activeColor: string = localStorage.getItem("contrastColor1LS");

    if (activeColor === "#fff") {
        $("body").addClass("black_images");
    } 
    else {
        $("body").addClass("white_images");
    }  
});

$(".colors__white").on("click", (): void => {
    $("body").removeClass().addClass("black_images");
    changeSkinsColor("black");
});

$(".colors__black").on("click", (): void => {
    $("body").removeClass().addClass("white_images");
    changeSkinsColor("white");
});

// Change skins color

const getAllSkinsWays = () => {
    const allSkins: JQuery<Element> = $(".swiper-slide__image"),

        allSkinsSrc: Element[] = [],
        allSkinsDataSrc: Element[] = [],

        allSkinsSrcWays: string[] = [],
        allSkinsDataSrcWays: string[] = [];

    for (let i: number = 0; i < allSkins.length; i++) {

        if ($(allSkins[i]).hasClass("swiper-lazy-loaded")) {
            allSkinsSrcWays.push($(allSkins[i]).attr("src"));
            allSkinsSrc.push(allSkins[i]);
        }
        else {
            allSkinsDataSrcWays.push($(allSkins[i]).attr("data-src"));

            allSkinsDataSrc.push(allSkins[i]);
        }
    }
    return [allSkinsSrc, allSkinsDataSrc, allSkinsSrcWays, allSkinsDataSrcWays];
};

const changeSkinsColor = (color: string): void => {

    const allSrcWays: Element[] | string[] = getAllSkinsWays()[2],
        allDataSrcWays: Element[] | string[] = getAllSkinsWays()[3],

        allSkinsSrc: Element[] | string[] = getAllSkinsWays()[0],
        allSkinsDataSrc: Element[] | string[] = getAllSkinsWays()[1];

    workWithWays(allDataSrcWays);
    workWithWays(allSrcWays);

    function workWithWays(way: Element[] | string[]): void {

        if (way.length === 1) {
            for (let w: number = 0; w < way.length; w++) {
                CutAndAddWay(w);
            }
        }
        else {
            for (let w: number = 0; w < way.length; w++) {
                CutAndAddWay(w);
            }
        }

        function CutAndAddWay (w: number): void {

            if ($($(allSkinsSrc)[w]).attr("data-section") === "backgrounds") return;

            const cutWay: string[] = String(way[w]).split("/");
            let baseWay: string = "";

            for (let b: number = 0; b < cutWay.length - 2; b++) {
                baseWay += cutWay[b] + "/";
            }

            const newWay: string = `${baseWay}${color}/${cutWay[cutWay.length - 1]}`;

            $($(allSkinsSrc)[w]).attr("src", newWay);
            $($(allSkinsDataSrc)[w]).attr("data-src", newWay);
        };
    }
};