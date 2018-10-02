import * as key from "keymaster";
import { Camera } from "./camera";


export const initializeKeyListeners = () => {
    
    key("2", Camera.moveUp);
    key("x", Camera.moveDown);
    key("a", Camera.moveLeft);
    key("d", Camera.moveRight);
    key("w", Camera.moveForward);
    key("s", Camera.moveBackwards);

    key("up", Camera.rotateUp);
    key("down", Camera.rotateDown);
    key("left", Camera.rotateLeft);
    key("right", Camera.rotateRight);

    key("r", Camera.increaseFocalLength);
    key("t", Camera.decreaseFocalLength);
}