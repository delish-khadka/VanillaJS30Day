const data = {
  a: "sounds/clap.wav",
  s: "sounds/hihat.wav",
  d: "sounds/kick.wav",
  f: "sounds/openhat.wav",
  g: "sounds/boom.wav",
  h: "sounds/ride.wav",
  j: "sounds/snare.wav",
  k: "sounds/tom.wav",
  l: "sounds/tink.wav",
};

function handleKeyPress(e) {
  const key = e.key.toLowerCase();
  if (data[key]) {
    play(data[key]);
  } else {
    console.log("Sound not found for key:", key);
  }
}

function play(sound) {
  try {
    const audio = new Audio(sound);
    audio.play().catch((err) => {
      console.error("Failed to play sound:", err);
    });
  } catch (error) {
    console.error("An error occurred while playing the sound:", error);
  }
}

// Attach the event listener (excluded from testing)
// document.addEventListener("keydown", handleKeyPress);

module.exports = { data, handleKeyPress, play };
