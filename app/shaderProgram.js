export const getShaderProgramSources = () => ({
    // Vertex shader program
    vsSource: `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `,
  // Fragment shader program
  fsSource: `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `
})