import * as $ from "jquery";
import { startGame, rest } from "./game";

// Show result 

export const showResult = (): void => {
    const content = $(".lobby__result").html().split(" -")[0];

    $(".lobby__result").html(`${content} - ${rest}`);
};

// Show record

export const showRecord = (): void => {
    const content = $(".lobby__record").html().split(" -")[0];

    $(".lobby__record").html(`${content} - ${localStorage.getItem("game_record")}`);
};

// Restart

$(".buttons__restart").on("click", (): void => {
    $(".content__lobby").fadeOut(300);
    setTimeout((): void => {
        startGame();
    }, 300);
});

// Skins 

$(".buttons__skins").on("click", (): void => {
    $(".content__lobby").fadeOut(350);

    setTimeout((): void => {
        location.href = "game_skins.html";
    }, 400);
});