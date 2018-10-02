import {state} from "./appState";

const MOVE_SPEED = 0.15;

export class Camera {
    static moveForward() {
        state.translation[2] += MOVE_SPEED;
    }

    static moveBackwards() {
        state.translation[2] -= MOVE_SPEED;
    }

    static moveLeft() {
        state.translation[0] += MOVE_SPEED;    
    }

    static moveRight() {
        state.translation[0] -= MOVE_SPEED;    
    }

    static moveUp() {
        state.translation[1] -= MOVE_SPEED;    
    }

    static moveDown() {
        state.translation[1] += MOVE_SPEED;    
    }

    static increaseFocalLength() {
        state.focalLength += 1;
    }

    static decreaseFocalLength() {
        state.focalLength -= 1;
    }

    static rotateUp() {
        state.rotationY += 0.01;
    }

    static rotateDown() {
        state.rotationY -= 0.01;
    }

    static rotateLeft() {
        state.rotationX += 0.01;
    }

    static rotateRight() {
        state.rotationX -= 0.01;
    }
}