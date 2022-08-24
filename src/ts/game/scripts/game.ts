import "originSCSS/game/styles/game.scss";
import "originSCSS/game/styles/adap/adap-game.scss";

import * as $ from "jquery";
import "./start_window";
import "./lobby_window";
import { showResult, showRecord } from "./lobby_window";
import { unlockSkins, spawnSkins} from "./unlock_skin";

const page = $(window);

// Objects and record

const character: JQuery<Element> = $(".game__character"),
    obstacl: JQuery<Element> = $(".game__obstacle");
export let rest: number = 0;

// get active color

const getActoveColor = (): string => {
    const activeColor = localStorage.getItem("contrastColor1LS");

    if (activeColor === "#fff") return "black";
    else return "white";
};

$(".colors__color").on("click", (): void => {
    setTimeout((): void => {
        addSkins();
    });
});

// Add skins 

const addSkins = (): void => {
    $(".game__character").attr("src", `/../img/game/choose_skin/characters/${getActoveColor()}/${getActiveSkins("characters")}.webp`);
    $(".obstacle__block, .counter__image_obstacle").attr("src", `/../img/game/choose_skin/obstacles/${getActoveColor()}/${getActiveSkins("obstacles")}.webp`);
    $(".game__background").attr("src", `/../img/game/choose_skin/backgrounds/${getActiveSkins("backgrounds")}.webp`);
};

const getActiveSkins = (activePath): number => {
    const skins = JSON.parse(localStorage.getItem("skins"))[activePath];
    const allValues = Object.values(skins);
    for (let i: number = 0; i < allValues.length; i++) {
        if (allValues[i] === "active") {
            return i;
        }
    }
};

addSkins();

// Start and stop game 

export const startGame = (): void => {
    rest = 0;
    $(".counter__rest").html(String(rest));

    setTimeout((): void => {
        $(".content__game").fadeIn(300);
        $(".content__game").css("display", "flex");
    
        const defoltCharacterTop: number = character.offset().top;
        
        const gameplay = setInterval((): void => {
            const obstacLeft: number = obstacl.offset().left,
                characterTop: number = character.offset().top;
                
            if (obstacLeft >= character.offset().left && obstacLeft <= character.offset().left + parseInt(character.css("width")) && defoltCharacterTop*0.8 < characterTop) {
                clearInterval(gameplay);
                stopGame();
                $(".game__obstacle").css("animation-play-state", "paused");
            } 
        }, 10);


        let speed: number = 0,
            maxSpeed: number = 0,
            standartSpeed: number = 0;

        const windowWidth = page.width();
        
        if (windowWidth >= 1000) {
            standartSpeed = 2000;
            maxSpeed = 1000;
        } 
        else if (windowWidth >= 500 && windowWidth < 1000) {
            standartSpeed = 1500;
            maxSpeed = 700;
        }
        else {
            standartSpeed = 1300;
            maxSpeed = 900;
        }

        speed = standartSpeed;

        const spawnObstacle = (timeForAnim: number) => {
            $(".game__obstacle").css("animation", `obstacleMove ${timeForAnim}ms linear forwards`);
            upSpeed();
        };

        spawnObstacle(standartSpeed);

        function upSpeed(): void {

            const changeSpeed = setTimeout((): void => {

                // add new skins and rest
        
                setTimeout((): void => {
                    rest++;
                    $(".counter__rest").html(String(rest));

                    $(".game__new_skin").remove();
                    spawnSkins(rest);
                }, 100);

                // Add speed 
                
                if (speed > maxSpeed) speed -= 100;

                $(".game__obstacle").css("animation", "none");
                setTimeout((): void => {
                    spawnObstacle(speed);
                }, 10);
                
            }, speed);

            setInterval((): void => {
                if ($(".content__game").css("display") === "none") clearTimeout(changeSpeed);
            }, 10);
        };

    }, 100);
};

// Jump

const jump = (): void => {

    let animTime: number = 400;

    if (page.width() < 1000) animTime = 500;

    if (!character.hasClass("game__character-active")) {
        character.addClass("game__character-active");
        setTimeout(() => {
            character.removeClass("game__character-active");
        }, animTime);
    }
};

$(".content__game").on("click", (): void => jump());

page.on("keydown", (event): void => {
    const pressedKey: string = event.key;

    if (pressedKey === "w" || pressedKey ==="ArrowUp" || pressedKey === " ") {
        jump();
    }
});

// Stop game 

const stopGame = (): void => {
    
    character.css("top", character.offset().top).addClass("character-game_over");

    const getRecord: number = Number(localStorage.getItem("game_record"));
    if (getRecord < rest || !getRecord) localStorage.setItem("game_record", String(rest));

    $(".content__game").fadeOut(300);
    setTimeout((): void => {
        $(".content__lobby").fadeIn(300).css("display", "flex");
        $(".game__new_skin").remove();

        character.removeClass("character-game_over");
        
        showResult();
        showRecord();
        unlockSkins();

    }, 300);
};

// Close game 

$(".content__close").on("click", (): void => {

    $(".anim-show1").addClass("closeGame");
    setTimeout((): JQuery<Element> => $(".anim-show2").addClass("closeGame"), 700);

    setTimeout((): void => {
        location.href = "/";
    }, 1500);
}); 