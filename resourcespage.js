
function resourcePageTitle() { // creates 'resources' title
  if(resourcePressed == true){
  fill(219, 201, 162);
  stroke(outlineColor);
  strokeWeight(8);
  textSize(75);
  text('RESOURCES', 361, 90);
  }
}

function centerResourceIcon() {
  if (resourcePressed == true) {
  // Center of the canvas
  const canvasWidth = 1200;
  const canvasHeight = 800;
  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  // Offset values to center the shapes
  const xO = centerX - 980; // 980 is half of the total width of your shapes
  const yO = centerY - 490; // 490 is half of the total height of your shapes
  const xOffset = xO - 10; // 477.5
  const yOffset = yO + 10; // 205

  // creates back two legs
  fill(204, 108, 61);
  stroke(outlineColor);
  strokeWeight(6);
  rect(867.5 + xOffset, 285 + yOffset, 20, 80); // back right leg
  rect(1092.5 + xOffset, 285 + yOffset, 20, 80); // back left leg

  for (let y = 365; y <= 595; y += 110) { // color inside shelf back
    noStroke();
    fill(204, 108, 61);
    rect(887.5 + xOffset, y + yOffset, 205, 70);
  }

  for (let y = 365; y <= 595; y += 110) { // color inside shelf walls
    noStroke();
    fill(204, 108, 61);
    rect(857.5 + xOffset, y + yOffset, 30, 70);
    triangle(857.5 + xOffset, y + 70 + yOffset, 857.5 + xOffset, y + 110 + yOffset, 887.5 + xOffset, y + 70 + yOffset);
    rect(1092.5 + xOffset, y + yOffset, 30, 70);
    triangle(1092.5 + xOffset, y + 70 + yOffset, 1122.5 + xOffset, y + 70 + yOffset, 1122.5 + xOffset, y + 110 + yOffset);
  }

  for (let y = 325; y <= 595; y += 110) { // left lines making up inside shelf
    stroke(outlineColor);
    strokeWeight(6);
    line(887.5 + xOffset, y + yOffset, 887.5 + xOffset, y + 110 + yOffset);
  }

  for (let y = 325; y <= 595; y += 110) { // right lines making up inside shelf
    stroke(outlineColor);
    strokeWeight(6);
    line(1092.5 + xOffset, y + yOffset, 1092.5 + xOffset, y + 110 + yOffset);
  }


  for (let y = 325; y <= 695; y += 110) { // fills layers
    stroke(outlineColor);
    strokeWeight(6);
    line(887.5 + xOffset, y + yOffset, 887.5 + xOffset, y + 40 + yOffset);
    stroke(237, 128, 76);
    noStroke();
    fill(237, 128, 76);
    triangle(887.5 + xOffset, y + yOffset, 887.5 + xOffset, y + 40 + yOffset, 857.5 + xOffset, y + 40 + yOffset);
    rect(887.5 + xOffset, y + yOffset, 205, 40);
    triangle(1092.5 + xOffset, y + yOffset, 1122.5 + xOffset, y + 40 + yOffset, 1092.5 + xOffset, y + 40 + yOffset);

    // draws layers
    stroke(outlineColor);
    strokeWeight(6);
    line(887.5 + xOffset, y + yOffset, 1092.5 + xOffset, y + yOffset);
    line(857.5 + xOffset, y + 40 + yOffset, 1122.5 + xOffset, y + 40 + yOffset);
    line(887.5 + xOffset, y + yOffset, 857.5 + xOffset, y + 40 + yOffset);
    line(1092.5 + xOffset, y + yOffset, 1122.5 + xOffset, y + 40 + yOffset);
  }

  noStroke();
  fill(222, 132, 89);
  push();
  translate(867.5 + xOffset, 285 + yOffset);
  rotate(40);
  rect(0, 0, 15, 50);
  pop();
  triangle(867.5 + xOffset, 285 + yOffset, 887.5 + xOffset, 285 + yOffset, 877.5 + xOffset, 295 + yOffset);

  push();
  translate(1092.5 + xOffset, 285 + yOffset);
  rotate(320);
  rect(0, 0, 15, 50);
  pop();
  triangle(1122.5 + 20 + xOffset, 325 + yOffset, 1122.5 + xOffset, 325 + yOffset, 1122.5 + 10 + xOffset, 310 + yOffset);
  fill(buttonsColor);
  rect(1092.5 + xOffset, 285 - 12 + yOffset, 20, 10);

  stroke(outlineColor);
  strokeWeight(6);
  line(867.5 + xOffset, 285 + yOffset, 887.5 + xOffset, 285 + yOffset);
  line(1092.5 + xOffset, 285 + yOffset, 1092.5 + 20 + xOffset, 285 + yOffset);

  // top side lines
  line(867.5 + xOffset, 285 + yOffset, 837.5 + xOffset, 325 + yOffset);
  line(867.5 + 20 + xOffset, 285 + yOffset, 837.5 + 20 + xOffset, 325 + yOffset);
  line(1092.5 + xOffset, 285 + yOffset, 1122.5 + xOffset, 325 + yOffset);
  line(1092.5 + 20 + xOffset, 285 + yOffset, 1122.5 + 20 + xOffset, 325 + yOffset);


  // creates two front legs and title
  fill(222, 132, 89);
  stroke(outlineColor);
  strokeWeight(6);
  rect(837.5 + xOffset, 325 + yOffset, 20, 400, 3, 0, 0, 0); // front left leg
  rect(1122.5 + xOffset, 325 + yOffset, 20, 400, 0, 3, 0, 0); // front right leg


  for (let y = 325; y <= 695; y += 110) { // fills layers
    stroke(outlineColor);
    strokeWeight(6);
    line(887.5 + xOffset, y + yOffset, 887.5 + xOffset, y + 40 + yOffset);
    stroke(237, 128, 76);
    noStroke();
    fill(237, 128, 76);
    triangle(887.5 + xOffset, y + yOffset, 887.5 + xOffset, y + 40 + yOffset, 857.5 + xOffset, y + 40 + yOffset);
    rect(887.5 + xOffset, y + yOffset, 205, 40);
    triangle(1092.5 + xOffset, y + yOffset, 1122.5 + xOffset, y + 40 + yOffset, 1092.5 + xOffset, y + 40 + yOffset);

    // draws layers
    stroke(outlineColor);
    strokeWeight(6);
    line(887.5 + xOffset, y + yOffset, 1092.5 + xOffset, y + yOffset);
    line(857.5 + xOffset, y + 40 + yOffset, 1122.5 + xOffset, y + 40 + yOffset);
    line(887.5 + xOffset, y + yOffset, 857.5 + xOffset, y + 40 + yOffset);
    line(1092.5 + xOffset, y + yOffset, 1122.5 + xOffset, y + 40 + yOffset);
  }

  noStroke();
  fill(222, 132, 89);
  push();
  translate(867.5 + xOffset, 285 + yOffset);
  rotate(40);
  rect(0, 0, 15, 50);
  pop();
  triangle(867.5 + xOffset, 285 + yOffset, 887.5 + xOffset, 285 + yOffset, 877.5 + xOffset, 295 + yOffset);

  stroke(outlineColor);
  strokeWeight(6);
  line(867.5 + xOffset, 285 + yOffset, 887.5 + xOffset, 285 + yOffset);
  line(867.5 + xOffset, 285 + yOffset, 837.5 + xOffset, 325 + yOffset);
  line(867.5 + 20 + xOffset, 285 + yOffset, 837.5 + 20 + xOffset, 325 + yOffset);
  line(1092.5 + xOffset, 285 + yOffset, 1122.5 + xOffset, 325 + yOffset);
  line(1092.5 + 20 + xOffset, 285 + yOffset, 1122.5 + 20 + xOffset, 325 + yOffset);

  // creates two front legs
  fill(222, 132, 89);
  stroke(outlineColor);
  strokeWeight(6);
  rect(837.5 + xOffset, 325 + yOffset, 20, 400, 3, 0, 0, 0); // front left leg
  rect(1122.5 + xOffset, 325 + yOffset, 20, 400, 0, 3, 0, 0); // front right leg
  }
}

function resourceHere(){
let hereX = 500;
let hereY = 300;
let hereW = 200;
let hereH = 80;
let hereR = 30;
if(mouseX > hereX && mouseX < hereX+hereW && mouseY > hereY && mouseY < hereY+hereH){
fill(bgColor);
stroke(outlineColor);
strokeWeight(5);
rect(hereX, hereY, hereW, hereH, hereR);

stroke(237, 128, 76);
fill(237, 128, 76);
strokeWeight(1);
textSize(55);
text('HERE!', hereX+15, hereY+60);
} else {
fill(outlineColor);
stroke(bgColor);
strokeWeight(5);
rect(hereX, hereY, hereW, hereH, hereR);

stroke(bgColor);
fill(bgColor);
strokeWeight(1);
textSize(55);
text('HERE!', hereX+15, hereY+60);
}
}

function herePressed(){
let hereX = 500;
let hereY = 300;
let hereW = 200;
let hereH = 80;
let hereR = 30;
if(mouseX > hereX && mouseX < hereX+hereW && mouseY > hereY ** mouseY < hereY+hereH){
    window.open("https://docs.google.com/document/d/1ubBckgDuAPyvm6NbLefwn4dAyC1l-HdEBRf2gWWG67c/edit?usp=sharing");
  }
}


function resourcePage(){
if(resourcePressed == true){
  resourcePageTitle();
  centerPage();
  centerResourceIcon();
  resourceHere();
  backButton();
  }
}