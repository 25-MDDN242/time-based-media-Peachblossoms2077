// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  beige
  fill(200); // dark grey

  let clockx = 70; // x and y postion of the clock 
  let clocky = -60;

  // draw the numbers
  function digit0(locx, locy) {
    circle(280 + clockx + locx, 230 + clocky + locy, 15);
    circle(260 + clockx + locx, 230 + clocky + locy, 15);
    circle(240 + clockx + locx, 230 + clocky + locy, 15);
    circle(220 + clockx + locx, 250 + clocky + locy, 15);
    circle(220 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 330 + clocky + locy, 15);
    circle(280 + clockx + locx, 370 + clocky + locy, 15);
    circle(260 + clockx + locx, 370 + clocky + locy, 15);
    circle(240 + clockx + locx, 370 + clocky + locy, 15);
    circle(220 + clockx + locx, 330 + clocky + locy, 15);
    circle(220 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 290 + clocky + locy, 15);
    circle(220 + clockx + locx, 290 + clocky + locy, 15);
    circle(300 + clockx + locx, 350 + clocky + locy, 15);
    circle(220 + clockx + locx, 350 + clocky + locy, 15);
    }

  function digit1(locx, locy) {
    circle(300 + clockx + locx, 230 + clocky + locy, 15);
    circle(300 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 290 + clocky + locy, 15);
    circle(300 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 330 + clocky + locy, 15);
    circle(300 + clockx + locx, 350 + clocky + locy, 15);
    circle(300 + clockx + locx, 370 + clocky + locy, 15);
    circle(280 + clockx + locx, 250 + clocky + locy, 15);
    circle(260 + clockx + locx, 270 + clocky + locy, 15);
    circle(240 + clockx + locx, 290 + clocky + locy, 15);
  }
  
  function digit2(locx, locy) {
    circle(280 + clockx + locx, 230 + clocky + locy, 15);
    circle(260 + clockx + locx, 230 + clocky + locy, 15);
    circle(240 + clockx + locx, 230 + clocky + locy, 15);
    circle(220 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 290 + clocky + locy, 15);
    circle(280 + clockx + locx, 310 + clocky + locy, 15);
    circle(260 + clockx + locx, 330 + clocky + locy, 15);
    circle(240 + clockx + locx, 350 + clocky + locy, 15);
    circle(220 + clockx + locx, 370 + clocky + locy, 15);
    circle(240 + clockx + locx, 370 + clocky + locy, 15);
    circle(260 + clockx + locx, 370 + clocky + locy, 15);
    circle(280 + clockx + locx, 370 + clocky + locy, 15);
    circle(300 + clockx + locx, 370 + clocky + locy, 15);
  }

  function digit3(locx, locy) {
    circle(280 + clockx + locx, 230 + clocky + locy, 15);
    circle(260 + clockx + locx, 230 + clocky + locy, 15);
    circle(240 + clockx + locx, 230 + clocky + locy, 15);
    circle(220 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 290 + clocky + locy, 15);
    circle(280 + clockx + locx, 300 + clocky + locy, 15);
    circle(300 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 330 + clocky + locy, 15);
    circle(300 + clockx + locx, 350 + clocky + locy, 15);
    circle(280 + clockx + locx, 370 + clocky + locy, 15);
    circle(260 + clockx + locx, 370 + clocky + locy, 15);
    circle(240 + clockx + locx, 370 + clocky + locy, 15);
    circle(220 + clockx + locx, 350 + clocky + locy, 15);
  }

  function digit4(locx, locy) {
    circle(300 + clockx + locx, 230 + clocky + locy, 15);
    circle(300 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 290 + clocky + locy, 15);
    circle(300 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 330 + clocky + locy, 15);
    circle(300 + clockx + locx, 350 + clocky + locy, 15);
    circle(300 + clockx + locx, 370 + clocky + locy, 15);
    circle(280 + clockx + locx, 250 + clocky + locy, 15);
    circle(260 + clockx + locx, 270 + clocky + locy, 15);
    circle(240 + clockx + locx, 290 + clocky + locy, 15);
    circle(240 + clockx + locx, 310 + clocky + locy, 15);
    circle(260 + clockx + locx, 310 + clocky + locy, 15);
    circle(280 + clockx + locx, 310 + clocky + locy, 15);
    circle(320 + clockx + locx, 310 + clocky + locy, 15);
  
  }

  function digit5(locx, locy) {
    circle(300 + clockx + locx, 230 + clocky + locy, 15);
    circle(280 + clockx + locx, 230 + clocky + locy, 15);
    circle(260 + clockx + locx, 230 + clocky + locy, 15);
    circle(240 + clockx + locx, 230 + clocky + locy, 15);
    circle(220 + clockx + locx, 230 + clocky + locy, 15);
    circle(220 + clockx + locx, 250 + clocky + locy, 15);
    circle(220 + clockx + locx, 270 + clocky + locy, 15);
    circle(220 + clockx + locx, 290 + clocky + locy, 15);
    circle(240 + clockx + locx, 290 + clocky + locy, 15);
    circle(260 + clockx + locx, 290 + clocky + locy, 15);
    circle(280 + clockx + locx, 290 + clocky + locy, 15);
    circle(300 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 330 + clocky + locy, 15);
    circle(300 + clockx + locx, 350 + clocky + locy, 15);
    circle(280 + clockx + locx, 370 + clocky + locy, 15);
    circle(260 + clockx + locx, 370 + clocky + locy, 15);
    circle(240 + clockx + locx, 370 + clocky + locy, 15);
    circle(220 + clockx + locx, 370 + clocky + locy, 15);
    
    
  }

  function digit6(locx, locy) {

    circle(280 + clockx + locx, 230 + clocky + locy, 15);
    circle(260 + clockx + locx, 230 + clocky + locy, 15);
    circle(240 + clockx + locx, 230 + clocky + locy, 15);
    circle(220 + clockx + locx, 250 + clocky + locy, 15);
    circle(220 + clockx + locx, 270 + clocky + locy, 15);
    circle(220 + clockx + locx, 290 + clocky + locy, 15);
    circle(240 + clockx + locx, 290 + clocky + locy, 15);
    circle(260 + clockx + locx, 290 + clocky + locy, 15);
    circle(280 + clockx + locx, 290 + clocky + locy, 15);
    circle(300 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 330 + clocky + locy, 15);
    circle(300 + clockx + locx, 350 + clocky + locy, 15);
    circle(220 + clockx + locx, 310 + clocky + locy, 15);
    circle(220 + clockx + locx, 330 + clocky + locy, 15);
    circle(220 + clockx + locx, 350 + clocky + locy, 15);
    circle(280 + clockx + locx, 370 + clocky + locy, 15);
    circle(260 + clockx + locx, 370 + clocky + locy, 15);
    circle(240 + clockx + locx, 370 + clocky + locy, 15);

  }

  function digit7(locx, locy) {
    circle(300 + clockx + locx, 230 + clocky + locy, 15);
    circle(280 + clockx + locx, 230 + clocky + locy, 15);
    circle(260 + clockx + locx, 230 + clocky + locy, 15);
    circle(240 + clockx + locx, 230 + clocky + locy, 15);
    circle(220 + clockx + locx, 230 + clocky + locy, 15);
    circle(300 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 270 + clocky + locy, 15);
    circle(280 + clockx + locx, 290 + clocky + locy, 15);
    circle(260 + clockx + locx, 310 + clocky + locy, 15);
    circle(260 + clockx + locx, 330 + clocky + locy, 15);
    circle(260 + clockx + locx, 350 + clocky + locy, 15);
    circle(260 + clockx + locx, 370 + clocky + locy, 15);
  }
  
  function digit8(locx, locy) {
  circle(280 + clockx + locx, 230 + clocky + locy, 15);
  circle(260 + clockx + locx, 230 + clocky + locy, 15);
  circle(240 + clockx + locx, 230 + clocky + locy, 15);
  circle(220 + clockx + locx, 250 + clocky + locy, 15);
  circle(220 + clockx + locx, 270 + clocky + locy, 15);
  circle(240 + clockx + locx, 290 + clocky + locy, 15);
  circle(300 + clockx + locx, 250 + clocky + locy, 15);
  circle(300 + clockx + locx, 270 + clocky + locy, 15);
  circle(280 + clockx + locx, 290 + clocky + locy, 15);
  circle(260 + clockx + locx, 290 + clocky + locy, 15);
  circle(300 + clockx + locx, 310 + clocky + locy, 15);
  circle(300 + clockx + locx, 330 + clocky + locy, 15);
  circle(300 + clockx + locx, 350 + clocky + locy, 15);
  circle(280 + clockx + locx, 370 + clocky + locy, 15);
  circle(260 + clockx + locx, 370 + clocky + locy, 15);
  circle(240 + clockx + locx, 370 + clocky + locy, 15);
  circle(220 + clockx + locx, 350 + clocky + locy, 15);
  circle(220 + clockx + locx, 330 + clocky + locy, 15);
  circle(220 + clockx + locx, 310 + clocky + locy, 15);

  }

  function digit9(locx, locy) {
    circle(280 + clockx + locx, 230 + clocky + locy, 15);
    circle(260 + clockx + locx, 230 + clocky + locy, 15);
    circle(240 + clockx + locx, 230 + clocky + locy, 15);
    circle(280 + clockx + locx, 290 + clocky + locy, 15);
    circle(260 + clockx + locx, 290 + clocky + locy, 15);
    circle(240 + clockx + locx, 290 + clocky + locy, 15);
    circle(220 + clockx + locx, 250 + clocky + locy, 15);
    circle(220 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 250 + clocky + locy, 15);
    circle(300 + clockx + locx, 270 + clocky + locy, 15);
    circle(300 + clockx + locx, 290 + clocky + locy, 15);
    circle(300 + clockx + locx, 310 + clocky + locy, 15);
    circle(300 + clockx + locx, 330 + clocky + locy, 15);
    circle(300 + clockx + locx, 350 + clocky + locy, 15);
    circle(280 + clockx + locx, 370 + clocky + locy, 15);
    circle(260 + clockx + locx, 370 + clocky + locy, 15);
    circle(240 + clockx + locx, 370 + clocky + locy, 15);
  }

  function colon() {
    circle(390 + clockx , 270 + clocky , 15);
    circle(390 + clockx , 350 + clocky , 15);
  }

// switches render the time in the correct format
switch (obj.hours) {
  case 1:
    digit0(0,0);
    digit1(-160,0);
    break;
  case 2:
    digit0(0,0);
    digit2(-160,0);
    break;
  case 3:
    digit0(0,0);
    digit3(-160,0);
    break;
  case 4:
    digit0(0,0);
    digit4(-160,0);
    break;
  case 5:
    digit0(0,0);
    digit5(-160,0);
    break;
  case 6:
    digit0(0,0);
    digit6(-160,0);
    break;
  case 7:
    digit0(0,0);
    digit7(-160,0);
    break;
  case 8:
    digit0(0,0);
    digit8(-160,0);
    break;
  case 9:
    digit0(0,0);
    digit9(-160,0);
    break;
  case 10:
    digit1(-160,0);
    digit0(0,0);
    break;
  case 11:
    digit1(-160,0);
    digit1(0,0);
    break;
  case 12:
    digit1(-160,0);
    digit2(0,0);
    break;
  case 13:
    digit1(-160,0);
    digit3(0,0);
    break;
  case 14:
    digit1(-160,0);
    digit4(0,0);
    break;
  case 15:
    digit1(-160,0);
    digit5(0,0);
    break;
  case 16:
    digit1(-160,0);
    digit6(0,0);
    break;
  case 17:
    digit1(-160,0);
    digit7(0,0);
    break;
  case 18:
    digit1(-160,0);
    digit8(0,0);
    break;
  case 19:
    digit1(-160,0);
    digit9(0,0);
    break;
  case 20:
    digit2(-160,0);
    digit0(0,0);
    break;
  case 21:
    digit2(-160,0);
    digit1(0,0);
    break;
  case 22:
    digit2(-160,0);
    digit2(0,0);
    break;
  case 23:
    digit2(-160,0);
    digit3(0,0);
    break;
}

switch (obj.minutes) {
  case 1:
    digit0(260,0);
    digit1(420,0);
    break;
  case 2:
    digit0(260,0);
    digit2(420,0);
    break;
  case 3:
    digit0(260,0);
    digit3(420,0);
    break;
  case 4:
    digit0(260,0);
    digit4(420,0);
    break;
  case 5:
    digit0(260,0);
    digit5(420,0);
    break;
  case 6:
    digit0(260,0);
    digit6(420,0);
    break;
  case 7:
    digit0(260,0);
    digit7(420,0);
    break;
  case 8:
    digit0(260,0);
    digit8(420,0);
    break;
  case 9:
    digit0(260,0);
    digit9(420,0);
    break;
  case 10:
    digit1(260,0);
    digit0(420,0);
    break;
  case 11:
    digit1(260,0);
    digit1(420,0);
    break;
  case 12:  
    digit1(260,0);
    digit2(420,0);
    break;
  case 13:
    digit1(260,0);
    digit3(420,0);
    break;
  case 14:
    digit1(260,0);
    digit4(420,0);
    break;
  case 15:
    digit1(260,0);
    digit5(420,0);
    break;
  case 16:
    digit1(260,0);
    digit6(420,0);
    break;
  case 17:
    digit1(260,0);
    digit7(420,0);
    break;
  case 18:
    digit1(260,0);
    digit8(420,0);
    break;
  case 19:
    digit1(260,0);
    digit9(420,0);
    break;
  case 20:
    digit2(260,0);
    digit0(420,0);
    break;
  case 21:  
    digit2(260,0);
    digit1(420,0);
    break;
  case 22:
    digit2(260,0);
    digit2(420,0);
    break;
  case 23:
    digit2(260,0);
    digit3(420,0);
    break;
  case 24:
    digit2(260,0);
    digit4(420,0);
    break;
  case 25:
    digit2(260,0);
    digit5(420,0);
    break;
  case 26:
    digit2(260,0);
    digit6(420,0);
    break;
  case 27:
    digit2(260,0);
    digit7(420,0);
    break;
  case 28:
    digit2(260,0);
    digit8(420,0);
    break;
  case 29:
    digit2(260,0);
    digit9(420,0);
    break;
  case 30:
    digit3(260,0);
    digit0(420,0);
    break;
  case 31:
    digit3(260,0);
    digit1(420,0);
    break;
  case 32:
    digit3(260,0);
    digit2(420,0);
    break;
  case 33:
    digit3(260,0);
    digit3(420,0);
    break;
  case 34:
    digit3(260,0);
    digit4(420,0);
    break;
  case 35:  
    digit3(260,0);
    digit5(420,0);
    break;
  case 36:
    digit3(260,0);
    digit6(420,0);
    break;
  case 37:
    digit3(260,0);
    digit7(420,0);
    break;
  case 38:
    digit3(260,0);
    digit8(420,0);
    break;
  case 39:
    digit3(260,0);
    digit9(420,0);
    break;
  case 40:
    digit4(260,0);
    digit0(420,0);
    break;
  case 41:
    digit4(260,0);
    digit1(420,0);
    break;
  case 42:
    digit4(260,0);
    digit2(420,0);
    break;
  case 43:
    digit4(260,0);
    digit3(420,0);
    break;
  case 44:  
    digit4(260,0);
    digit4(420,0);
    break;
  case 45:
    digit4(260,0);
    digit5(420,0);
    break;
  case 46:  
    digit4(260,0);
    digit6(420,0);
    break;
  case 47:
    digit4(260,0);
    digit7(420,0);
    break;
  case 48:
    digit4(260,0);
    digit8(420,0);
    break;
  case 49:
    digit4(260,0);
    digit9(420,0);
    break;
  case 50:
    digit5(260,0);
    digit0(420,0);
    break;
  case 51:
    digit5(260,0);
    digit1(420,0);
    break;
  case 52:
    digit5(260,0);
    digit2(420,0);
    break;
  case 53:
    digit5(260,0);
    digit3(420,0);
    break;
  case 54:
    digit5(260,0);
    digit4(420,0);
    break;
  case 55:
    digit5(260,0);
    digit5(420,0);
    break;
  case 56:
    digit5(260,0);
    digit6(420,0);
    break;
  case 57:
    digit5(260,0);
    digit7(420,0);
    break;
  case 58:
    digit5(260,0);
    digit8(420,0);
    break;
  case 59:
    digit5(260,0);
    digit9(420,0);
    break;
colon();
}

colon();

}