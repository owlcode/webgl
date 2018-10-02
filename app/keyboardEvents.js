import * as key from "keymaster";
import {state} from "./appState";

export const initializeKeyListeners = () => {
    key("w", () => {
        state.translation[0] += -0.5;
    });
    key("s", () => console.log("w down"));
    key("a", () => console.log("w down"));
    key("d", () => console.log("w down"));

    key("up", () => console.log("w down"));
    key("down", () => console.log("w down"));
    key("left", () => console.log("w down"));
    key("right", () => console.log("w down"));
}