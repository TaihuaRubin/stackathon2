import Omnitone from "./omnitone/build/omnitone.min.esm.js";

const audioContext = new AudioContext();
const foaRenderer = Omnitone.createFOARenderer(audioContext);

const spacialButton = document.getElementById("spacial");
spacialButton.addEventListener("click", () => {
  console.log("spacial!");
});

// audio stuff
