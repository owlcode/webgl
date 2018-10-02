export const getCanvas = () => {
    const canvas = document.querySelector('#glcanvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

    if (!gl) {
        throw new Error('Unable to initialize WebGL. Your browser or machine may not support it.');
    }

    return {
        canvas,
        gl
    }
}