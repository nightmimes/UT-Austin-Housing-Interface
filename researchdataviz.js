// initiate variables 
let w = 2; //  stroke weight
let wT = 1.5; // text stroke weight
let y1R = 171.28378378378378;
let y2R = 237.5
let y3R = 640;
let rBarX = 895; // const
let rBarY = 150;
let rBarW = 30; // const

// text transformations
let barMove = 20; 
let barDown = 20;

rBarH = y3R-rBarY; // height of resource bar
c1H = y1R-rBarY; // height of c1
c2H = y2R-y1R; // height of c2
c3H = y3R-y2R; // height of c3

 function researchData(){ // all default color bars
   
  let rBarMove = barWidth + 155;
  let barsX = researchX+rBarMove;
  let barMove = 20;
 // noStroke();

  barsY = 150; // resets y coord for after each loop

 for (let i = 0; i < researchPercentages.length; i++) { // for the total number indeces under research
    let percentage = researchPercentages[i]; // var for research indeces
    let barLength = barHeight * (percentage / 100); // calculates lengths in each rect inside research bar
    
    if (i === 0) { // before all indeces
      if(mouseX>rBarX && mouseX<rBarX+rBarW && mouseY>rBarY && mouseY<y1R){ // c1 hovered
      researchBarTitle();
      stroke(bgColor);
      strokeWeight(wT);
      fill(c1);
      textSize(20);
      text('UHD Dormitories', 524, 170);
      textSize(25);
      text('2,250', 914+barMove, 168);
        
      noStroke();
      fill(c2);
      text('5,000', 914+barMove, 210);
      fill(c3);
      text('42,250', 913+barMove, 350);
      
      stroke(bgColor);
      strokeWeight(w);
    } else {
      studentNums();
      noStroke();
    }
      fill(c1);
      rect(barsX+barMove, barsY, barWidth, barLength, cornerRadius, cornerRadius, 0, 0); // create first rect inside research bar
    } else if (i === researchPercentages.length - 1) { // start from before the last index
      if(mouseX>rBarX && mouseX<rBarX+rBarW && mouseY>y2R && mouseY<y3R){ // c3 hovered
      researchBarTitle();
      stroke(bgColor);
      strokeWeight(wT);
      fill(c3);
      textSize(28);
      text('Off-Campus', 525, 350);
      textSize(18);
      text('(non-UHD)', 555, 370);
      textSize(25);
      text('42,250', 913+barMove, 350);
        
      noStroke();
      fill(c1);
      text('2,250', 914+barMove, 168); 
      fill(c2);
      text('5,000', 914+barMove, 210); 
      
      stroke(bgColor);
      strokeWeight(w);
      } else {
        studentNums();
        noStroke();
      }
      fill(c3);
      rect(barsX+barMove, barsY, barWidth, barLength, 0, 0, cornerRadius, cornerRadius); // create last rect inside research bar
    } else { // otherwise
      if(mouseX>rBarX && mouseX<rBarX+rBarW && mouseY>y1R && mouseY<y2R){ // c2 hovered
      researchBarTitle();
      stroke(bgColor);
      strokeWeight(wT);
      fill(c2);
      textSize(20);
      text('Other', 575, 250);
      textSize(22);
      text('UHD Housing', 532, 272);
      textSize(25);
      text('5,000', 914+barMove, 210); 
        
      noStroke();
      fill(c1);
      text('2,250', 914+barMove, 168); 
      fill(c3);
      text('42,250', 913+barMove, 350); 
      
      stroke(bgColor);
      strokeWeight(w);
         } else {
          studentNums();
          noStroke();
         }
      fill(c2);
      rect(barsX+barMove, barsY, barWidth, barLength); // create rect in the middle
    }
    barsY += barLength; // add length of index to y axis of research bar
  } 
}

function researchTower(){
let moveTower = 90;
let y1R = 171.28378378378378;
let y2R = 237.5;
let y3R = 640;

h1 = y1R - 150;
topMax = 150 + 85;
topH = topMax - y1R
topY = y1R + topH;
h2 = y2R - topMax;
mainMax = 510 - y2R;
  
rX = 780-moveTower;
topRectY = 275 - moveUp;
c2W = 55+rTop; 
  
noStroke();

fill(c1);
rect(780 - moveTower, 275 - moveUp, 55+rTop, h1); // tower top
fill(c2);
rect(780 - moveTower, y1R, 55+rTop, topH); // tower top
rect(780 - moveTower, topMax, 85+15, h2); // tower main
fill(c3);
rect(780 - moveTower, y2R, 85+15, mainMax); // tower main
rect(780 - moveTower, 585 - moveUp + moveDown, 240 / 2, 25); // roof
triangle(900-moveTower, 585-moveUp+moveDown, 900-moveTower, 610-moveUp+moveDown, 935-moveTower, 610-moveUp+moveDown);
rect(780 - moveTower, 610 - moveUp + moveDown, 260 / 2, 45 - 10);
rect(780 - moveTower, 645 - moveUp + moveDown, 310 / 2, 80 - 10); // bottom rect

if(mouseX>780-moveTower && mouseX<(780-moveTower)+(55+rTop) && mouseY>275-moveUp && mouseY<(275-moveUp)+h1){ // if c1 hovered
  fill(bgColor);
  stroke(outlineColor);
  strokeWeight(w);
  textSize(20);
  text('UHD Dormitories', 524, 170);
  
  stroke(outlineColor);
  strokeWeight(w);
  noFill();
  rect(780 - moveTower, 275 - moveUp, 55+rTop, h1);
  researchTowerTitle();
  strokeWeight(2);
  stroke(outlineColor);
  fill(bgColor);
  textSize(20);
  text('4.34%', 700, 168);
  
  noStroke();
  text('13.51%', 694, 208); 
  textSize(21);
  text('82.14%', 705, 348);
}
let topA = mouseX>780-moveTower && mouseX<(780-moveTower)+(55+rTop) && mouseY>y1R && mouseY<y1R+topH;

let mainC2A = mouseX>780-moveTower && mouseX<(780-moveTower)+100 && mouseY>y1R+topH && mouseY<y2R;
if(topA || mainC2A){ // if c2 hovered
    let towerX = 780 - moveTower;
    let towerTopY = y1R;
    let towerTopW = 55+rTop;
    let towerTopH = topH;
  
    let tMainY = topMax;
    let tMainW = 100;
    let tMainH = h2;
  
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
    line(towerX, towerTopY, towerX, towerTopY+towerTopH);
    line(towerX, towerTopY, towerX+towerTopW, towerTopY);
    line(towerX+towerTopW, towerTopY, towerX+towerTopW, towerTopY+towerTopH);
    line(towerX, tMainY, towerX, y2R);
    line(towerX, y2R, towerX+tMainW, y2R);
    line(towerX+tMainW, tMainY+h2, towerX+tMainW, y2R);
    line(towerX+towerTopW, tMainY, towerX+tMainW, tMainY);
    line(towerX+tMainW, tMainY, towerX+tMainW, y2R);
    researchTowerTitle();
    strokeWeight(2);
    stroke(outlineColor);
    fill(bgColor);
    textSize(20);
    text('13.51%', 694, 208);
    noStroke();
    text('4.34%', 700, 168); 
    textSize(21);
    text('82.14%', 705, 348);
}
  let Xmin = 355; // Minimum x-coordinate
  let Xmax = 390; // Maximum x-coordinate
  let Ymin = 510; // Minimum y-coordinate
  let Ymax = 535; // Maximum y-coordinate
  
  let mainA = mouseX>780-moveTower && mouseX<(780-moveTower)+100 && mouseY>y2R && mouseY<y2R+mainMax;
  let roofA = mouseX>780-moveTower && mouseX<(780-moveTower)+120 && mouseY>585-moveUp+moveDown && mouseY<(585-moveUp+moveDown)+25;
  let triangleA = mouseX >= Xmin && mouseX <= Xmax && mouseY >= Ymin && mouseY <= Ymax;
  let b1A = mouseX>780-moveTower && mouseX<(780-moveTower)+130 && mouseY>610-moveUp+moveDown && mouseY<(610-moveUp+moveDown)+35;
  let b2A = mouseX>780-moveTower && mouseX<(780-moveTower)+155 && mouseY>645-moveUp+moveDown && mouseY<(645-moveUp+moveDown)+70;

  if(mainA || roofA || triangleA || b1A || b2A){
    let towerX = 780 - moveTower;
    let c3MainY = y2R;
    let c3MainW = 100;
    let c3MainH = mainMax;
    
    let roofY = 585 - moveUp + moveDown;
    let roofW = 120;
    let roofH = 25;
    
    let b1Y = 610 - moveUp + moveDown;
    let b1W = 130;
    let b1H = 35;
     
    let b2Y = 645 - moveUp + moveDown;
    let b2W = 155;
    let b2H = 70;
    
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
    line(towerX, c3MainY, towerX, c3MainY+c3MainH);
    line(towerX, c3MainY, towerX+c3MainW, c3MainY);
    line(towerX+c3MainW, c3MainY, towerX+c3MainW, c3MainY+c3MainH);
    line(towerX, roofY, towerX, roofY+roofH);
    line(towerX+c3MainW, roofY, towerX+roofW, roofY);
    line(towerX+roofW, roofY, towerX+roofW+35, roofY+roofH); // triangle
    line(towerX+roofW+35, roofY+roofH, towerX+b1W, roofY+roofH); // triangle
    line(towerX, b1Y, towerX, b1Y+b1H);
    line(towerX+b1W, b1Y, towerX+b1W, b1Y+b1H);
    line(towerX, b2Y, towerX, b2Y+b2H);
    line(towerX, b2Y+b2H, towerX+b2W, b2Y+b2H);
    line(towerX+b2W, b2Y+b2H, towerX+b2W, b2Y);
    line(towerX+b2W, b2Y, towerX+b1W, b2Y);
    
    researchTowerTitle();
    strokeWeight(2);
    stroke(outlineColor);
    fill(bgColor);
    textSize(21);
    text('82.14%', 705, 348);
    noStroke();
    textSize(20);
    text('4.34%', 700, 168);
    text('13.51%', 694, 208);
  }
  rPercentLabels();
}


function researchBarTitle(){ // default title
fill(bgColor);
noStroke();

textSize(45);
push();
translate(866+barMove, 532+barDown); 
rotate(-80); // Negative angle for reflection
text('#', 0, 0);
pop();

textSize(20);
push();
translate(866+barMove, 503+barDown); 
rotate(-90); // Negative angle for reflection
text('of', 0, 0);
pop();

push();
translate(866+barMove, 482+barDown); 
rotate(-90); // Negative angle for reflection
text('students', 0, 0);
pop();
}

function studentNums(){ // default num labels 
noStroke();
  
fill(c1);
textSize(25);
text('2,250', 914+barMove, 168); 

fill(c2);
text('5,000', 914+barMove, 210); 

fill(c3);
text('42,250', 913+barMove, 350); 
}

function rPercentLabels(){
// strokeWeight(2);
// stroke(outlineColor);
noStroke();
fill(bgColor);
textSize(20);
text('4.34%', 700, 168); // Adjusted x-coordinate for reflection
text('13.51%', 694, 208); // Adjusted x-coordinate for reflection
textSize(21);
text('82.14%', 705, 348); // Adjusted x-coordinate for reflection
}

function researchTowerTitle(){
strokeWeight(3);
stroke(outlineColor);
fill(bgColor);
textSize(45);
push();
translate(768, 169); // Adjusted x-coordinate for reflection
rotate(10); // Negative angle for reflection
text('%', 0, 0);
pop();

textSize(20);
text('of', 772, 193); // Adjusted x-coordinate for reflection
text('total', 772, 210); // Adjusted x-coordinate for reflection
text('students', 772, 228); // Adjusted x-coordinate for reflection
}