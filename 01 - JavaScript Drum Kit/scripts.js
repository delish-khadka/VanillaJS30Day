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
  let key_el = document.querySelector(`.key[data-key= "${e.key}"]`);
  // console.log(key_el);
  if (!key_el) {
    console.log("Key not found for key", key);
    return;
  }

  if (data[key]) {
    play(data[key]);
    key_el.classList.add("playing");
    setTimeout(() => {
      key_el.classList.remove("playing");
    }, 100);
  } else {
    console.log("Sound not found for key:", key);
  }
});

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
