// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  beige
  fill(200); // dark grey
  var circlex = 0;
  var circley = -60;

  function firstdigit() {
    circle(300 + circlex, 230 + circley, 15);
    circle(300 + circlex, 250 + circley, 15);
    circle(300 + circlex, 270 + circley, 15);
    circle(300 + circlex, 290 + circley, 15);
    circle(300 + circlex, 310 + circley, 15);
    circle(300 + circlex, 330 + circley, 15);
    circle(300 + circlex, 350 + circley, 15);
    circle(300 + circlex, 370 + circley, 15);
    circle(300 + circlex, 390 + circley, 15);
    circle(280 + circlex, 250 + circley, 15);
    circle(260 + circlex, 270 + circley, 15);
    circle(240 + circlex, 290 + circley, 15);
    circle(220 + circlex, 310 + circley, 15);
    circle(220 + circlex, 330 + circley, 15);
    circle(240 + circlex, 330 + circley, 15);
    circle(260 + circlex, 330 + circley, 15);
    circle(280 + circlex, 330 + circley, 15);
    circle(320 + circlex, 330 + circley, 15);
  }

  function colon() {
    circle(390 + circlex, 270 + circley, 15);
    circle(390 + circlex, 350 + circley, 15);
  }

  function seconddigit() {
    circle(550 + circlex, 230 + circley, 15);
    circle(550 + circlex, 250 + circley, 15);
    circle(550 + circlex, 270 + circley, 15);
    circle(550 + circlex, 290 + circley, 15);
    circle(550 + circlex, 310 + circley, 15);
    circle(550 + circlex, 330 + circley, 15);
    circle(550 + circlex, 350 + circley, 15);
    circle(550 + circlex, 370 + circley, 15);
    circle(550 + circlex, 390 + circley, 15);
    circle(530 + circlex, 250 + circley, 15);
    circle(510 + circlex, 270 + circley, 15);
    circle(490 + circlex, 290 + circley, 15);
    circle(470 + circlex, 310 + circley, 15);
    circle(470 + circlex, 330 + circley, 15);
    circle(490 + circlex, 330 + circley, 15);
    circle(510 + circlex, 330 + circley, 15);
    circle(530 + circlex, 330 + circley, 15);
    circle(570 + circlex, 330 + circley, 15);
  }

  function thirddigit() {
    circle(650 + circlex, 230 + circley, 15);
    circle(670 + circlex, 230 + circley, 15);
    circle(690 + circlex, 230 + circley, 15);
    circle(710 + circlex, 230 + circley, 15);
    circle(730 + circlex, 230 + circley, 15);
    circle(730 + circlex, 250 + circley, 15);
    circle(730 + circlex, 270 + circley, 15);
    circle(730 + circlex, 290 + circley, 15);
    circle(710 + circlex, 310 + circley, 15);
    circle(690 + circlex, 330 + circley, 15);
    circle(690 + circlex, 350 + circley, 15);
    circle(690 + circlex, 370 + circley, 15);
    circle(690 + circlex, 390 + circley, 15);

  }

  firstdigit();
  colon();
  seconddigit();
  thirddigit();

}
