import * as $ from "jquery";
import { show3D } from "originTS/3d/3d";
import key from "./../sculpture";

$(".description__button-3d").on("click", (): void => {
    $("body").addClass("3dActive");
    show3D(`3D_models/sculptures/${key}/scene.gltf`);
});