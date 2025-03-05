/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  //console.log(width)
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

//  background(50); //  beige
  
/*
  fill(200); // dark grey
  textSize(40);
  textAlign(CENTER, CENTER);
  text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  fill(249, 140, 255);// pink
  ellipse(width / 3, 350, 150);
  fill(140, 255, 251) // blue
  ellipse(width / 2, 350, 150);
  fill(175, 133, 255); // purple
  ellipse(width / 3 * 2, 350, 150); */


// Transition from night to day at 5am, day to night at 6pm
//var c1, c2;
// if(obj.hours > 18){
//   var nighttime = map(obj.hours, 18, 23, 0, 255);
// }
// else if(obj.hours < 5){
//   var daytime = map(obj.hours, 0, 5, 0, 255);
// }

  var daylight = 0;  // day/nightlight values are for background gradient
  var nightlight = 0; 

  var sunY = 0; // sunY and moonY values are for their y position
  var moonY= 0;

  // if(obj.hours > 17 || obj.hours < 5){ 
  //   nightlight = map(obj.hours, 17, 19, 0, 255)
  // }

  // else if(obj.hours >= 5 && obj.hours <= 17){
  //   daylight = map(obj.hours, 0, 5, 0, 255)
  // }


 // if(hours )
// sun 
  // when hours is 0, 5 have the sun say down 
  // when hours is between 5 and 12 have the sun untill its off screen 

// moon 
// moon hidden under earth till 11 pm. 
// then moon rises till off screen at 5 am.

  
  // c1 = color(166, 229, 245); // top color during day
  // c2 = color(220, 246, 252);// bottom color during dAy


   nightColour1 =  color(2, 16, 33, nightlight); // top color during night
   nightColour2 = color(0, 42, 92, nightlight); // bottom color during night

// TOPCOLOR, BOTTOMCOLOR

  dayColor1 = color(166, 229, 245, daylight);
  dayColor2 = color(220, 246, 252, daylight);

// if daytime then
if(obj.hours > 5 && obj.hours < 18){
  setGradient(dayColor1, dayColor2); 
}
else{
//if nightimet then 
  setGradient(nightColour1, nightColour2); // TOPCOLOR, BOTTOMCOLOR
}

  // setGradient(dayColor1, dayColor2);



  // moonY = map(obj.hours, 0, 5, 600, -200);
  // sunY = map(obj.hours, 6, 14, 800, -200);

  // fill(250, 208, 90);
  // noStroke();
  // circle (width/2, sunY, 500);

  // fill(230, 247, 246);
  // noStroke();
  // circle (width/2, moonY, 200);

  // //fill(156, 255, 145);
  // fill(daylight);
  // noStroke();
  // circle (width/2, 800, 1000); // EARTH


}

function setGradient(c1, c2) { // taken from https://p5js.org/examples/color-linear-gradient.html
  noFill();

  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y); 
  }
}