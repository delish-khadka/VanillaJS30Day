// scripts.js

const clock = document.querySelector(".clock");
const hourIndicators = document.querySelectorAll(".hours-indicator");

hourIndicators.forEach((indicator, index) => {
  const angle = index * 30 + 30; // Each hour is 30 degrees apart
  indicator.style.transform = `rotate(${angle}deg) translate(0, -90px) rotate(-${angle}deg)`;
});

function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate angles for each hand
  // formula:
  // second_angle = second * 6 (eg: for 0 second 0 degree angle i.e. 0 * 6 = 0)
  // minute_angle = minute * 6 + second/10
  // hour_angle = hour * 30 + minute/2
  const secondsAngle = seconds * 6 + 90; // +90 to start at 12 o'clock
  const minutesAngle = minutes * 6 + (seconds / 60) * 6 + 90;
  const hoursAngle = hours * 30 + (minutes / 60) * 30 + 90;

  // Apply rotation to hands
  document.getElementById("second-hand").style.transform = `rotate(${secondsAngle}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minutesAngle}deg)`;
  document.getElementById("hour-hand").style.transform = `rotate(${hoursAngle}deg)`;
}

// Update clock every second
setInterval(setClock, 1000);

// Initialize the clock on load
setClock();
