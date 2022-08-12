import * as $ from "jquery";

const skins = {
    "backgrounds": {
        0: "active",
        5: "close",
        20: "close",
        35: "close",
        50: "close",
        70: "close"
    },

    "characters": {
        0: "active",
        10: "close",
        25: "close",
        40: "close",
        55: "close",
        75: "close"
    },
    
    "obstacles": {
        0: "active",
        15: "close",
        30: "close",
        45: "close",
        60: "close",
        80: "close"
    }
}; 

// Unlock skins after game 

const isFirstGame = localStorage.getItem("skins");

if (isFirstGame === undefined || isFirstGame === null) {
    localStorage.setItem("skins", JSON.stringify(skins));
}

export const unlockSkins = (): void => {

    const record: number = Number(localStorage.getItem("game_record")),
        allSkins = JSON.parse(localStorage.getItem("skins")),
        skinTypes = Object.keys(skins);

    for (let s: number = 0; s < skinTypes.length; s++) {
        const allKeys: string[] = Object.keys(allSkins[skinTypes[s]]),
            allValues: string[] = Object.values(allSkins[skinTypes[s]]);

        for (let a: number = 0; a < allKeys.length; a++) {
            if (Number(allKeys[a]) <= record && allValues[a] !== "active" && record !== 0) {

                allSkins[skinTypes[s]][allKeys[a]] = "open";
                localStorage.setItem("skins", JSON.stringify(allSkins));
            }
        }
    }
};

// Spawn skins on game

export const spawnSkins = (point): void => {
    const allSkins = JSON.parse(localStorage.getItem("skins")),
        skinTypes = Object.keys(skins);


    const getActiveColor = (): string => {
        const activeColor: string = localStorage.getItem("contrastColor1LS");

        if (activeColor === "#fff") return "black";
        else return "white";
    };

    for (let s: number = 0; s < skinTypes.length; s++) {
        const allKeys: string[] = Object.keys(allSkins[skinTypes[s]]),
            allValues: string[] = Object.values(allSkins[skinTypes[s]]);
        
        for (let a: number = 1; a < allKeys.length; a++) {
            if (Number(allKeys[a]) === point+1 && allValues[a] === "close") {
                if (skinTypes[s] !== "backgrounds") {
                    $(".game__obstacle").append(`<img src="/../img/game/choose_skin/${skinTypes[s]}/${getActiveColor()}/${a}.webp" class="game__new_skin"/>`);
                }
                else {
                    $(".game__obstacle").append(`<img src="/../img/game/choose_skin/${skinTypes[s]}/${a}.webp" class="game__new_skin"/>`);
                }
                
                skinTypes[s] === "backgrounds" ? $(".game__new_skin").addClass("game__new_skin-bg") : $(".game__new_skin").removeClass("game__new_skin-bg");
            }
        }
    };
};