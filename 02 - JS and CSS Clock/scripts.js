// scripts.js
function setClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate angles for each hand
  const secondsAngle = (seconds / 60) * 360 + 90; // +90 to start at 12 o'clock
  const minutesAngle = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hoursAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90;

  // Apply rotation to hands
  document.getElementById("second-hand").style.transform = `rotate(${secondsAngle}deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${minutesAngle}deg)`;
  document.getElementById("hour-hand").style.transform = `rotate(${hoursAngle}deg)`;
}

// Update clock every second
setInterval(setClock, 1000);

// Initialize the clock on load
setClock();
