/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // Day and night gradient colors
  let nightColour1 = color(2, 16, 33); // Dark blue
  let nightColour2 = color(0, 42, 92); // Light blue

  let dayColor1 = color(166, 229, 245); // Light sky blue
  let dayColor2 = color(220, 246, 252); // Brighter sky blue

  let dawnint, duskint;
  
  // Define transitions properly
  if (obj.hours >= 7 && obj.hours < 17) { // Daytime (7 AM - 5 PM)
    setGradient(dayColor1, dayColor2);
  } 
  else if (obj.hours >= 19 || obj.hours < 5) { // Nighttime (7 PM - 5 AM)
    setGradient(nightColour1, nightColour2);
  }
  else if (obj.hours >= 5 && obj.hours < 7) { // Dawn (5 AM - 7 AM)
    dawnint = map(obj.hours + obj.minutes / 60, 5, 7, 0, 1, true);
    let daynighttrans1 = lerpColor(nightColour1, dayColor1, dawnint);
    let daynighttrans2 = lerpColor(nightColour2, dayColor2, dawnint);
    setGradient(daynighttrans1, daynighttrans2);
  }
  else if (obj.hours >= 17 && obj.hours < 19) { // Dusk (5 PM - 7 PM)
    duskint = map(obj.hours + obj.minutes / 60, 17, 19, 0, 1, true);
    let daynighttrans1 = lerpColor(dayColor1, nightColour1, duskint);
    let daynighttrans2 = lerpColor(dayColor2, nightColour2, duskint);
    setGradient(daynighttrans1, daynighttrans2);
  }

// Sun and Moon movement
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
