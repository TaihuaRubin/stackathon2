// import Omnitone from "./omnitone/build/omnitone.min.esm.js";

// const audioContext = new AudioContext();
// const foaRenderer = Omnitone.createFOARenderer(audioContext);

// const audioElement = document.createElement("audio");
// audioElement.src = "audio-file-foa-acn.wav";

// // Create AudioContext, MediaElementSourceNode and FOARenderer.
// const audioContext = new AudioContext();
// const audioElementSource = audioContext.createMediaElementSource(audioElement);
// const foaRenderer = Omnitone.createFOARenderer(audioContext);

// // Make connection and start play. Hook up the user input for the playback.
// foaRenderer.initialize().then(function () {
//   audioElementSource.connect(foaRenderer.input);
//   foaRenderer.output.connect(audioContext.destination);

//   // This is necessary to activate audio playback out of autoplay block.
//   someButton.onclick = () => {
//     audioContext.resume();
//     audioElement.play();
//   };
// });

const spacialButton = document.getElementById("spacial");
spacialButton.addEventListener("click", () => {
  console.log("spacial!");
  console.log(THREE);
});

// audio stuff
