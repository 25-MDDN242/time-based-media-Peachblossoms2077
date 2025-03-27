/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let alarmSound; //Values for various systems
let stars = [];
let staramount = 50;
let lastSecond = -1;
let dawnint, duskint;
let starAlpha = 0;
let isDayTime = false;

let cloudLeftImg, cloudRightImg; // parameters for the floating clouds
let cloudLeftX = 300;
let cloudRightX = 660;
let cloudSpeed = 0.05;
let cloudDirection = 1;

function preload() { // load images and sounds
  alarmSound = loadSound('alarm.mp3');
  earthImg = loadImage('EarthVector.png');
  cloudImg = loadImage('CloudVector.png');
  sunImg = loadImage('SunVector.png');
  moonImg = loadImage('MoonVector.png');
  cometImg = loadImage('CometVector.png');
  satelliteImg = loadImage('SatelliteVector.png');
  floatingcloudleftImg = loadImage('FloatingCloudLeftVector.png');
  floatingcloudrightImg = loadImage('FloatingCloudRightVector.png');
}

//Star system - modified by CHATGPT
function setupStars() { // initialize an empty array to store stars
  stars = [];
}

function drawStars(alpha) { // Draw and fade out stars
  noStroke();
  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    star.opacity -= star.fadeSpeed;
    fill(255, 255, 255, star.opacity * alpha);
    ellipse(star.x, star.y, 2);

    if (star.opacity <= 0) { // Remove stars that have faded out
      stars.splice(i, 1);
    }
  }
}

function draw_clock(obj) {

  // Day and night gradient colors
  let nightColour1 = color(2, 16, 33); // Dark blue
  let nightColour2 = color(0, 42, 92); // Light blue

  let dayColor1 = color(166, 229, 245); // Light sky blue
  let dayColor2 = color(220, 246, 252); // Brighter sky blue

  // Day-Night transitions
  if (obj.hours >= 7 && obj.hours < 17) { // Daytime (7 AM - 5 PM)
    setGradient(dayColor1, dayColor2);
    starAlpha = 0;
    isDayTime = true;
  } else if (obj.hours >= 19 || obj.hours < 5) { // Nighttime (7 PM - 5 AM)
    setGradient(nightColour1, nightColour2);
    starAlpha = 1;
    isDayTime = false;
  } else if (obj.hours >= 5 && obj.hours < 7) { // Dawn (5 AM - 7 AM)
    dawnint = map(obj.hours + obj.minutes / 60, 5, 7, 0, 1, true);
    let daynighttrans1 = lerpColor(nightColour1, dayColor1, dawnint);
    let daynighttrans2 = lerpColor(nightColour2, dayColor2, dawnint);
    setGradient(daynighttrans1, daynighttrans2);
    starAlpha = 1 - dawnint;
    isDayTime = false;
  } else if (obj.hours >= 17 && obj.hours < 19) { // Dusk (5 PM - 7 PM)
    duskint = map(obj.hours + obj.minutes / 60, 17, 19, 0, 1, true);
    let daynighttrans1 = lerpColor(dayColor1, nightColour1, duskint);
    let daynighttrans2 = lerpColor(dayColor2, nightColour2, duskint);
    setGradient(daynighttrans1, daynighttrans2);
    starAlpha = duskint;
    isDayTime = false;
  }

//Floating Cloud movement animation
  cloudLeftX += cloudSpeed * cloudDirection;
  cloudRightX -= cloudSpeed * cloudDirection;

  if (cloudLeftX > 340 || cloudLeftX < 260) {
    cloudDirection *= -1;
  }



  // Add "staramount" amount of stars every second
  if (obj.seconds !== lastSecond && starAlpha > 0.5) {
    for (let i = 0; i < staramount; i++) {
      stars.push({
        x: random(width), // Randomize vertical and horizontal position for every star
        y: random(height),
        opacity: 255, // Full opacity initially when stars are created
        fadeSpeed: random(1, 3) // Random fading speed
      });
    }
    lastSecond = obj.seconds;
  }

  drawStars(starAlpha); // Draw stars



  // Sun and Moon movement 
  let sunY = 700; // Default position for the sun
  if (obj.hours >= 5 && obj.hours < 15) {
    sunY = map(obj.hours + obj.minutes / 60 + obj.seconds / 3600, 5, 15, 700, -500, true); // Sun rises at 5 AM, exits at 3 PM
  }

  let moonY = 700; // Default position for the moon
  if (obj.hours >= 21 || obj.hours < 4) {
    moonY = map((obj.hours >= 21 ? obj.hours - 21 : obj.hours + 3) + obj.minutes / 60 + obj.seconds / 3600, 0, 7, 700, -500, true); // Moon rises at 9 PM, exits at 4 AM
  }



  // Draw Sun image
  imageMode(CENTER);
  image(sunImg, width / 2, sunY, 1440, 750);

  // Draw Moon image
  imageMode(CENTER);
  image(moonImg, width / 2, moonY, 960, 500);

  // Draw Earth image
  imageMode(CENTER);
  image(earthImg, width / 2, 250, 960, 500);

  // Draw Cloud image
  imageMode(CENTER);
  image(cloudImg, width / 2, 250, 960, 500);

  // Draw Floating Clouds image
  if (isDayTime) {
    image(floatingcloudleftImg, cloudLeftX, 100, 960, 500);
    image(floatingcloudrightImg, cloudRightX, 100, 960, 500);
  }

  // Satellite orbiting animation
  let satelliteAngle = radians((obj.seconds + obj.millis / 1000) * 6); // full rotation every minute
  let satelliteX = width / 2 + 250 * cos(satelliteAngle);
  let satelliteY = 400 + 150 * sin(satelliteAngle);

  imageMode(CENTER); // Draw satellite image
  image(satelliteImg, satelliteX, satelliteY, 96, 50);

  if (obj.seconds % 2 === 0) { // Blinking blue light every second
    fill(255, 0, 0);
    ellipse(satelliteX + 4, satelliteY - 4, 4);
  }



  // Alarm System 
  let earthX = width / 2;
  let earthY = 800;
  let baseRingSize = 1020; // Base ring size for both rings
  let ringSize = baseRingSize;
  let ringColor = color(255, 255, 255, 0); // Default ring color
  let strokeThickness = 10; // ring thickness

  if (obj.seconds_until_alarm > 0) { // Helped written by Dave from p5.js discord server.
    progress = map(obj.seconds_until_alarm, 30, 0, 0, TWO_PI, true); // Map remaining time to full circle
    stroke(255, 255, 255, 200);
    strokeWeight(strokeThickness);
    noFill();
    arc(earthX, earthY, baseRingSize, baseRingSize, -HALF_PI, -HALF_PI + progress); // Draw loading arc, modified by CHATGPT
  } else if (obj.seconds_until_alarm === 0) {
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



  // Comet animation - modified by CHATGPT
  if (obj.seconds < 1) {
    let cometProgress = map(obj.seconds + obj.millis / 1000, 0, 1, width + 100, -100);
    image(cometImg, cometProgress, height / 4, 1000, 400);
  }


  // Extra perameters for the alarm system
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