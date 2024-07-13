    let y1S = 192.6086956521739;
    let y2S = 299.1304347826087;
    let y3S = 640;
    let sBarX = 272; // x coord of survey bar
    let sBarY = 150; // starting y coord of survey bar
    let sBarW = 30; // width of survey bar
    
    sBarH = y3S - sBarY; // height of survey bar 
    c1H = y1S - sBarY; // height of c1
    c2H = y2S - y1S; // height of c2
    c3H = y3S - y2S; // height of c3


function surveyData(){ // draw survey data bar

  let barsX = surveyX+shiftBar;
  let barMove = 20;
// noStroke();

barsY = 150; // resets y coord for after each loop

  for (let i = 0; i < surveyPercentages.length; i++) { // for the total number indeces under survey
    let percentage = surveyPercentages[i]; // var for research indeces
    let barLength = barHeight * (percentage / 100); // calculates lengths in each rect inside survey bar
    
    if (i === 0) { // before all indeces
      if(mouseX>sBarX && mouseX<sBarX + sBarW && mouseY>sBarY && mouseY<sBarY+c1H){
      disclaimer();
      surveyBarTitle();
      stroke(bgColor);
      strokeWeight(wT);
      fill(c1);
      textSize(20);
      text('UHD Dormitories', 524, 170);
      textSize(30);
      text('2', 266-barMove, 182);
      noStroke();
      fill(c2);
      text('5', 265-barMove, 274);
      fill(c3);
      text('16', 250-barMove, 372);
        
      stroke(bgColor); // add outline
      strokeWeight(w);
      } else {
      noStroke();
      fill(c1);
      textSize(30);
      text('2', 266-barMove, 182);
      fill(c2);
      text('5', 265-barMove, 274);
      fill(c3);
      text('16', 250-barMove, 372);
      }
      fill(c1);
      rect(barsX-barMove, barsY, barWidth, barLength, cornerRadius, cornerRadius, 0, 0); // create first rect inside survey bar 
    } else if (i === surveyPercentages.length - 1) { // start from before the last index
      if(mouseX>sBarX && mouseX<sBarX + sBarW && mouseY>y2S && mouseY<y2S+c3H){
      disclaimer();
      surveyBarTitle();
      stroke(bgColor);
      strokeWeight(wT);
      fill(c3);
      textSize(28);
      text('Off-Campus', 525, 350);
      textSize(18);
      text('(non-UHD)', 555, 370);
      textSize(30);
      text('16', 250-barMove, 372);
        
      noStroke();
      fill(c1);
      text('2', 266-barMove, 182);
      fill(c2);
      text('5', 265-barMove, 274);
      
      stroke(bgColor); // add outline
      strokeWeight(w);
      } else {
      noStroke();
      fill(c1);
      textSize(30);
      text('2', 266-barMove, 182);
      fill(c2);
      text('5', 265-barMove, 274);
      fill(c3);
      text('16', 250-barMove, 372);
      }
      fill(c3);
      rect(barsX-barMove, barsY, barWidth, barLength, 0, 0, cornerRadius, cornerRadius);// create last rect inside survey bar
    } else {
      if(mouseX>sBarX && mouseX<sBarX + sBarW && mouseY>y1S && mouseY<y1S+c2H){
      disclaimer();
      surveyBarTitle();
      stroke(bgColor);
      strokeWeight(wT);
      fill(c2);
      textSize(20);
      text('Other', 575, 250);
      textSize(22);
      text('UHD Housing', 532, 272);
      textSize(30);
      text('5', 265-barMove, 274);
        
      noStroke();
      fill(c1);
      text('2', 266-barMove, 182);
      fill(c3);
      text('16', 250-barMove, 372);
        
      stroke(bgColor); // add outline
      strokeWeight(w);
      } else {
      noStroke();
      fill(c1);
      textSize(30);
      text('2', 266-barMove, 182);
      fill(c2);
      text('5', 265-barMove, 274);
      fill(c3);
      text('16', 250-barMove, 372);
      }
      fill(c2);
      rect(barsX-barMove, barsY, barWidth, barLength); // create rect in the middle
      }
    barsY += barLength; // add length of index to y axis of survey bar
}
}


function surveyTower(){
let moveTower = 90;
let y1 = 192.6086956521739;
let y2 = 299.1304347826087;
let y3 = 640;
  
let highY = (585-moveUp+moveDown);
let lowY = (610-moveUp+moveDown);
let b1Width = (480-moveTower+240/2);

  
h1 = y1-150;
topMax = 150+85;
topH = topMax-y1
topY = y1+topH;
h2 = y2-topY;
mainMax = 510-y2;

noStroke();
fill(c1);
rect(525-moveTower, 275-moveUp, 55+20, h1) // tower top
  
fill(c2);
rect(525-moveTower, y1, 55+20, topH) // tower top
rect(500-moveTower, topMax, 85+15, h2) // tower main
  
fill(c3);
rect(500-moveTower, y2, 85+15, mainMax) // tower main
rect(480-moveTower, 585-moveUp+moveDown, 240/2, 25) // roof
triangle(480-moveTower, 585-moveUp+moveDown, 480-moveTower, 610-moveUp+moveDown, 445-moveTower, 610-moveUp+moveDown)
rect(470-moveTower, 610-moveUp+moveDown, 260/2, 45-10)
rect(445-moveTower, 645-moveUp+moveDown, 310/2, 80-10) // bottom rect
  
  
  if(mouseX>525-moveTower && mouseX<(525-moveTower)+75 && mouseY>275-moveUp && mouseY<(275-moveUp)+h1){ // if c1 tower is hovered
    disclaimer();
    fill(bgColor);
    stroke(outlineColor);
    strokeWeight(w);
    textSize(20);
    text('UHD Dormitories', 524, 170);
    
    stroke(outlineColor);
    strokeWeight(w);
    noFill();
    rect(525-moveTower, 275-moveUp, 55+20, h1) // tower top
    surveyTowerTitle();
    strokeWeight(2);
    stroke(outlineColor);
    fill(bgColor);
    textSize(21);
    text('8.7%', 459, 182);
    noStroke();
    text('21.74%', 433, 275);
    text('65.57%', 433, 370);
  } 
  if(mouseX>525-moveTower && mouseX<(525-moveTower)+75 && mouseY>y1 && mouseY<y1+(y2-y1) || mouseX>500-moveTower && mouseX<(500-moveTower)+100 && mouseY>y1+topH && mouseY<(y1+topH)+(y2-(y1+topH))){ // if c2 tower is hovered
    let topX = 525-moveTower;
    let topY = y1;
    let topW = 55+20;
    let topH = 85-c1H;
    let mainX = 500-moveTower;
    let mainY = y1 + topH;
    let mainW = 85+15;
    let mainH = y2 - mainY;
    
    disclaimer();
    fill(bgColor);
    stroke(outlineColor);
    strokeWeight(w);
    textSize(20);
    text('Other', 575, 250);
    textSize(22);
    text('UHD Housing', 532, 272);
    
    stroke(outlineColor);
    strokeWeight(w);
    noFill();
    line(topX, topY, topX, topY+c1H);
    line(topX, topY, topX+topW, topY);
    line(topX+topW, topY, topX+topW, topY+c1H);
    line(mainX, mainY, mainX+(mainW-topW), mainY);
    line(mainX, mainY, mainX, mainY+mainH);
    line(mainX, mainY+mainH, mainX+mainW, mainY+mainH);
    line(mainX+mainW, mainY, mainX+mainW, mainY+mainH);
    surveyTowerTitle();
    strokeWeight(2);
    stroke(outlineColor);
    fill(bgColor);
    textSize(21);
    text('21.74%', 433, 275);
    noStroke();
    text('8.7%', 459, 182);
    text('65.57%', 433, 370);
  } 
  
let mainC3H = 210.8695652173913;
let tMinX = 355; // Minimum x-coordinate
let tMaxX = 390; // Maximum x-coordinate
let tMinY = 510; // Minimum y-coordinate
let tMaxY = 535; // Maximum y-coordinate
  
let mainA = mouseX>500-moveTower && mouseX<(500-moveTower)+100 && mouseY>y2 && mouseY< y2+mainC3H; // area bounding c3 main
  
let roofA = mouseX>480-moveTower && mouseX<(480-moveTower)+120 && mouseY>y2+mainC3H && mouseY<(y2+mainC3H)+25; // area bounding c3 roof
  
let triangleA = mouseX>=tMinX && mouseX<=tMaxX && mouseY>=tMinY && mouseY<=tMaxY;
    
let b1A = mouseX>470-moveTower && mouseX<(470-moveTower)+130 && mouseY>610-moveUp+moveDown && mouseY<(610-moveUp+moveDown)+35; // area bounding c3 base 1
  
let b2A = mouseX>445-moveTower && mouseX<(445-moveTower)+155 && mouseY>645-moveUp+moveDown && mouseY<(645-moveUp+moveDown)+70; // area bounding c3 bottom base 2


if(mainA || roofA || triangleA || b1A || b2A){ // if c3 tower is hovered
    let c2topH = 85-c1H;
    let c2mainY = y1 + c2topH;
    let c2mainH = y2 - c2mainY;
    let mainX = 500-moveTower;
    let mainY = (y1+topH)+(y2-c2mainY);
    let mainW = 85+15;
    let mainH = 275-c2mainH;
    let b1X = 470-moveTower;
    let b1Y = lowY;
    let b1W = 130;
    let b1H = 35;
    let b2X = 445-moveTower;
    let b2Y = 645-moveUp+moveDown;
    let b2W = 155;
    let b2H = 70;
  
    disclaimer();
  
    fill(bgColor);
    stroke(outlineColor);
    strokeWeight(w);
    textSize(28);
    text('Off-Campus', 525, 350);
    textSize(18);
    text('(non-UHD)', 555, 370);
  
    stroke(outlineColor);
    strokeWeight(w);
    noFill();
    line(mainX, mainY, mainX, mainY+mainH);
    line(mainX, mainY, mainX+mainW, mainY);
    line(mainX+mainW, mainY, mainX+mainW, mainY+mainH);
    line(445-moveTower, lowY, 445-moveTower+35, highY); // triangle line
    line(445-moveTower+35, highY, mainX, mainY+mainH);
    line(445-moveTower, lowY, b1X, b1Y); // triangle line
    line(480-moveTower+240/2, highY, 480-moveTower+240/2, lowY);
    line(b1X, b1Y, b1X, b1Y+b1H);
    line(b1X+b1W, b1Y, b1X+b1W, b1Y+b1H);
    line(b2X, b2Y, b2X, b2Y+b2H);
    line(b2X, b2Y+b2H, b2X+b2W, b2Y+b2H);
    line(b2X+b2W, b2Y, b2X+b2W, b2Y+b2H);
    line(b2X, b2Y, (b2X+b2W)-b1W, b2Y);
    surveyTowerTitle();
    strokeWeight(2);
    stroke(outlineColor);
    fill(bgColor);
    textSize(21);
    text('65.57%', 433, 370);
    noStroke();
    text('8.7%', 459, 182);
    text('21.74%', 433, 275);
  }
  percentLabels();
}

function surveyBarTitle(){
fill(bgColor);
noStroke();
textSize(45);
push();
translate(300+shiftBar-barMove, 490);
rotate(100);
text('#', 0, 0);
pop();
  
textSize(20);
push();
translate(300+shiftBar-barMove, 521);
rotate(90);
text('of', 0, 0);
pop();

push();
translate(300+shiftBar-barMove, 544);
rotate(90);
text('responses', 0, 0);
pop();
}

function percentLabels(){
noStroke();
fill(bgColor);
textSize(21);
text('8.7%', 459, 182);
text('21.74%', 433, 275);
text('65.57%', 433, 370);
}

function surveyTowerTitle(){
let shift = 20;
strokeWeight(3);
stroke(outlineColor);
fill(bgColor);
textSize(45);
push();
translate(408-shift, 180);
rotate(350);
text('%', 0, 0);
pop();
textSize(20);
text('of', 430-shift, 195);
text('total', 409-shift, 212);
text('responses', 355-shift, 228);
}




