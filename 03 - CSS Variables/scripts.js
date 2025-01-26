let img = document.getElementById("image-to-work");
let body_el = document.querySelector("body");

let spacing_el = document.getElementById("spacing");
let blur_el = document.getElementById("blur");
let color_el = document.getElementById("base");

spacing_el.addEventListener("change", (e) => {
  img.style.setProperty("height", `${e.target.value * 10}px`);
});
// console.log(spacing_el);
blur_el.addEventListener("change", (e) => {
  img.style.setProperty("filter", `blur(${e.target.value}px)`);
});

color_el.addEventListener("input", (e) => {
  body_el.style.setProperty("background-color", `${e.target.value}`);
});

