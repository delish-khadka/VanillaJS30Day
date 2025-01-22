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

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (data[key]) {
    play(data[key]);
  } else {
    console.log("sound not found");
  }
});

function play(sound) {
  const audio = new Audio(sound);
  audio.play();
}
// play("sounds/boom.wav");
