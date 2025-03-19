/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let alarmSound;

function preload() {
  alarmSound = loadSound('alarm.mp3'); // Load the alarm sound
}

function draw_clock(obj) {
  // Day and night gradient colors
  let nightColour1 = color(2, 16, 33); // Dark blue
  let nightColour2 = color(0, 42, 92); // Light blue

  let dayColor1 = color(166, 229, 245); // Light sky blue
  let dayColor2 = color(220, 246, 252); // Brighter sky blue

  let dawnint, duskint;

  // Day-Night transitions
  if (obj.hours >= 7 && obj.hours < 17) { // Daytime (7 AM - 5 PM)
    setGradient(dayColor1, dayColor2);
  } else if (obj.hours >= 19 || obj.hours < 5) { // Nighttime (7 PM - 5 AM)
    setGradient(nightColour1, nightColour2);
  } else if (obj.hours >= 5 && obj.hours < 7) { // Dawn (5 AM - 7 AM)
    dawnint = map(obj.hours + obj.minutes / 60, 5, 7, 0, 1, true);
    let daynighttrans1 = lerpColor(nightColour1, dayColor1, dawnint);
    let daynighttrans2 = lerpColor(nightColour2, dayColor2, dawnint);
    setGradient(daynighttrans1, daynighttrans2);
  } else if (obj.hours >= 17 && obj.hours < 19) { // Dusk (5 PM - 7 PM)
    duskint = map(obj.hours + obj.minutes / 60, 17, 19, 0, 1, true);
    let daynighttrans1 = lerpColor(dayColor1, nightColour1, duskint);
    let daynighttrans2 = lerpColor(dayColor2, nightColour2, duskint);
    setGradient(daynighttrans1, daynighttrans2);
  }

  // Sun and Moon movement 
  let sunY = 700; // Default position for the sun
  if (obj.hours >= 5 && obj.hours < 15) {
    sunY = map(obj.hours + obj.minutes / 60 + obj.seconds / 3600, 5, 15, 700, -500, true); // Sun rises at 5 AM, exits at 3 PM
  }

  let moonY = 700; // Default position for the moon
  if (obj.hours >= 21 || obj.hours < 4) {
    moonY = map((obj.hours >= 21 ? obj.hours - 21 : obj.hours + 3) + obj.minutes / 60 + obj.seconds / 3600, 0, 7, 700, -500, true); // Moon rises at 9 PM, exits at 4 AM
  }

  // SUN
  fill(250, 208, 90);
  noStroke();
  circle(width / 2, sunY, 500);

  // MOON
  fill(230, 247, 246);
  noStroke();
  circle(width / 2, moonY, 200);

  // EARTH
  fill(156, 255, 145);
  noStroke();
  circle(width / 2, 800, 1000);


  // Alarm System - Pulse ring around the earth
  let earthX = width / 2;
  let earthY = 800;
  let baseRingSize = 1020; // Base ring size for both rings
  let ringSize = baseRingSize;
  let ringColor = color(255, 255, 255, 0); // Default ring color
  let strokeThickness = 10; // Blue ring thickness

  if (obj.seconds_until_alarm > 0) {
    progress = map(obj.seconds_until_alarm, 30, 0, 0, TWO_PI, true); // Map remaining time to full circle
    stroke(255, 255, 255, 200);
    strokeWeight(strokeThickness);
    noFill();
    arc(earthX, earthY, baseRingSize, baseRingSize, -HALF_PI, -HALF_PI + progress); // Draw loading arc
  } else if (obj.seconds_until_alarm === 0) { // modified by CHATGPT
    let pulse = map(sin(frameCount * 0.03), -1, 1, 10, 50); 
    let ringSize = baseRingSize + pulse;
    stroke(255, 0, 0, map(pulse, 10, 50, 10, 120));
    strokeWeight(1000);
    noFill();
    ellipse(earthX, earthY, ringSize, ringSize);

    // Play alarm sound if it's not already playing
    if (!alarmSound.isPlaying()) {
      alarmSound.play();
    }
  } else {
    // Stop alarm when it's not active
    if (alarmSound.isPlaying()) {
      alarmSound.stop();
    }
  }

  strokeWeight(1);
  noFill(); 
  stroke(ringColor);
  strokeWeight(strokeThickness);
  ellipse(earthX, earthY, ringSize, ringSize);

}

// Function to set gradient background
function setGradient(c1, c2) { // taken from https://p5js.org/examples/color-linear-gradient.html
  noFill();
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }

}