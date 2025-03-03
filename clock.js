/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  console.log(width)
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  /*background(50); //  beige
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

  var c1, c2;
  var nighttime = map(obj.hours, 0, 23, 0, 255);
  var daytime = map(obj.hours, 0, 23, 255, 0);

  /* c1 = color(166, 229, 245);
  c2 = color(220, 246, 252);*/
  c1 = color(2, 16, 33, nighttime);
  c2 = color(0, 42, 92, nighttime);
  setGradient(c1, c2);


  function setGradient(c1, c2) { // taken from https://p5js.org/examples/color-linear-gradient.html
    noFill();
    for (var y = 0; y < height; y++) {
      var inter = map(y, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y); 
    }
  }

  c1 = color(166, 229, 245, daytime);
  c2 = color(220, 246, 252, daytime);
  setGradient(c1, c2);


  function setGradient(c1, c2) { // taken from https://p5js.org/examples/color-linear-gradient.html
    noFill();
    for (var y = 0; y < height; y++) {
      var inter = map(y, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y); 
    }
  }

  fill(156, 255, 145);
  noStroke();
  circle (width/2, 800, 1000);

}