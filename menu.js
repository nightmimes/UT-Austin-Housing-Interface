// functions to create the main menu page


function menu() { // draw 'survey', 'data', and 'resource' buttons
  noStroke();
  if(mainMenu == true){ // if main menu is true
  titleButton();
  buttonSurvey();
  buttonData();
  buttonResource();
  credits();
}
}

function credits(){
  let title = mouseX>190 && mouseX<190+820 && mouseY>45 && mouseY<45+155;
  let survey = mouseX > surveyButtonX && mouseX < surveyButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  let data = mouseX > dataButtonX && mouseX < dataButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  let resources = mouseX > resourceButtonX && mouseX < resourceButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
if(title || data || resources || survey){
 if(survey || data || resources){
  stroke(buttonsColor);
  strokeWeight(3);
}  
if(title){
  stroke(outlineColor);
  strokeWeight(4);
}
fill(bgColor);  
textSize(25);
text('By Kel S.', 552.5, 176); 
}
}

function titleButton(){ // creates the title 
  let titleX = 190;
  let titleY = 45;
  let titleW = 820;
  let titleH = 155;
  let titleR = 50;
  let hoverT = mouseX>titleX && mouseX<titleX+titleW && mouseY>titleY && mouseY<titleY+titleH;
  
  if(hoverT){
    fill(buttonsColor);
  } else {
    fill(outlineColor);  
  }
  rect(titleX, titleY, titleW, titleH, titleR)
  
  if(hoverT){
    stroke(outlineColor);
  } else {
    stroke(buttonsColor);  
  }
  noFill();
  strokeWeight(2);
  rect(titleX+15, titleY+15, titleW-30, titleH-30, 40) 
  
  if(hoverT){
    stroke(outlineColor);
  } else {
    stroke(buttonsColor); 
  }
  fill(bgColor);
  strokeWeight(6);
  textSize(90);
  text('UT Austin Housing', 334-110, 150);
}

function buttonSurvey(){ // draw survey button option
     if (mouseX > surveyButtonX && mouseX < surveyButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    stroke(168, 74, 50, 225);
    strokeWeight(15);
  } else {
    noStroke();
  }
  fill(buttonsColor);
  rect(surveyButtonX, buttonY, buttonWidth, buttonHeight, buttonRadius);
  sheet();
  
    if (yesSurvey == true) { // if yesSurvey is true
      surveySelected(); // display surveySelected when yesSurvey is true
    } else if(noSurvey == true){ // if noSurvey is true
      noSelected(); // display noSelected when noSurvey is true
    } else if(helpSurvey == true){
      helpSelected(); // display helpSelected when helpSurvey is true       
    } else { 
    iconPaper(); // Display iconPaper
    iconPencil(); // Display iconPencil
    surveyTitle(); // Display surveyTitle
}
}


function buttonData(){ // create data button option
    if (mouseX > dataButtonX && mouseX < dataButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    stroke(168, 74, 50, 225);
    strokeWeight(15);
  } else {
    noStroke();
  }
    fill(buttonsColor); // fill default button color
    rect(dataButtonX, buttonY, buttonWidth, buttonHeight, buttonRadius);
    dataRoof();
dataRects(); 
dataTitle();
dataWindows();
}

function buttonResource(){ // create resource button rect
  if (mouseX > resourceButtonX && mouseX < resourceButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    stroke(168, 74, 50, 225);
    strokeWeight(15);
  } else {
    noStroke();
  }
    fill(buttonsColor); // fill default button color
    rect(resourceButtonX, buttonY, buttonWidth, buttonHeight, buttonRadius);
    resourceIcon();
    resourceTitle();
}

// survey button functions

function surveyTitle(){
    stroke(outlineColor);
    fill(outlineColor);
  strokeWeight(4);
  textSize(60);
  text('SURVEY', 87, 360);
}

function sheet(){
    fill(255);
    stroke(outlineColor);
    strokeWeight(6);
    rect(60, 290, 300, 425)
}

function iconPaper(){
  let boxMove = 40;
  let yesBox = mouseX>100 && mouseX<100+60 && mouseY>405+boxMove && mouseY<(405+boxMove)+60;
  let noBox = mouseX>100 && mouseX<100+60 && mouseY>535 && mouseY<535+60;
  let helpBox = mouseX>100 && mouseX<100+60 && mouseY>625 && mouseY<625+60;
  
  noStroke();
  fill(outlineColor);
  textSize(22);
  text('CLICK', 97, 400);
  text('BOX', 107, 425);
  textSize(20);
  if(yesBox){
  text('to take', 175, 403);
  text('housing survey', 175, 423);  
    }
  if(noBox){
  text('to explore', 175, 403);
  text('other options', 175, 423); 
  }
  if(helpBox){
  text('to learn about', 175, 403);
  text('this graphic', 175, 423); 
  }
    
  for(let paperY=405+boxMove; paperY<=645+boxMove; paperY+=90){
    if(yesBox){ // if 'yes' box hovered
    noStroke();
    fill(outlineColor);
    rect(100, 405+boxMove, 60, 60);
    } else if(noBox){ // if 'no' box hovered
    noStroke();
    fill(outlineColor);
    rect(100, 535, 60, 60);
    } else if(helpBox){ // if 'help' box hovered
    noStroke();
    fill(outlineColor);
    rect(100, 625, 60, 60);
    }
    noFill();
    stroke(outlineColor);
    strokeWeight(6);
    rect(100, paperY, 60, 60)  
    }
    // adds the check box // adds the option labels
    noStroke();
    fill(outlineColor);
    textSize(35);
    text('Yes', 190, 445+boxMove);
    text('No', 190, 535+boxMove);
    text('Help', 190, 628+boxMove);
}

function iconPencil(){
    let eraserA = 10;
    let rotateE = 16;
    let pH = 10;
    let pV = 100;
fill(219, 201, 162);
stroke(outlineColor);
strokeWeight(3.5);
triangle(271 + pH, 526 + pV, 298 + pH, 482 + pV, 272 + pH, 476 + pV);
fill(outlineColor);
strokeWeight(1);
triangle(271 + pH, 525 + pV, 278 + pH, 512 + pV, 272 + pH, 510 + pV);

// pencil body
fill(224, 160, 110);
stroke(outlineColor);
strokeWeight(3.5);
push();
translate(320 + pH, 290 + pV);
rotate(15);
rect(0, 0, 30, 195, 5, 5, 10, 10);
pop();

// eraser rings
strokeWeight(2);
fill(outlineColor);
stroke(outlineColor);
push();
translate(321 + pH, 286 + pV);
rotate(rotateE);
for (let i = 0; i < 3; i++) {
  rect(0, 0, 30, 3, 5);
  translate(0, -4);
}
pop();

// eraser ring highlights
stroke(bgColor);
strokeWeight(1);
noFill();
push(); 
translate(323 + pH, 288 + pV);
rotate(15);
for (let i = 0; i < 3; i++) {
  rect(0, 0, 7, 0.05, 5);
  translate(0, -4);
}
pop();

// eraser
fill(232, 181, 167);
stroke(outlineColor);
strokeWeight(3);
push();
translate(329 + pH, 258 + pV);
rotate(rotateE);
rect(0, 0, 30, 20, 5, 5, 5, 5);
pop();
}


// data button functions

function dataRects(){
stroke(outlineColor);
strokeWeight(6);
fill(207, 149, 114);
rect(445, 645, 310, 80-10)
rect(470, 600+10, 260, 45-10)
rect(515, 360, 170, 205+20)
rect(545, 275, 110, 85)
  
//towerWindows();
noFill();
strokeWeight(6);
line(445, 610, 480, 585); // left slant
line(480, 565+20, 480+240, 585); // base 1
line(445, 610, 755, 610); // base 2
line(480+240, 585, 755, 610); // right slant 
}

function dataRoof(){
fill(204, 108, 61);
noStroke();
rect(480, 565+20, 240, 35-10)
triangle(480, 585, 480, 610, 445, 610)
triangle(480+240, 585, 480+240, 610, 755, 610)
}

function dataTitle(){
stroke(outlineColor);
strokeWeight(8);
textSize(70);
fill(219, 201, 162);
text('DA', 435, 345);
text('TA', 670, 345);
}

function dataWindows(){ // windows of the data tower
    let rectangles = [
    [550, 380, 23, 25], [550, 420, 23, 25], [550, 460, 23, 25], [550, 500, 23, 25], [550, 540, 23, 25],
    [588, 380, 23, 25], [588, 420, 23, 25], [588, 460, 23, 25], [588, 500, 23, 25], [588, 540, 23, 25],
    [626, 380, 23, 25], [626, 420, 23, 25], [626, 460, 23, 25], [626, 500, 23, 25], [626, 540, 23, 25]
  ];
  
  if(mouseX > dataButtonX && mouseX < dataButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight){
    fill(bgColor);
  } else {
    fill(204, 108, 61);
  }
  stroke(outlineColor);
  strokeWeight(6);
  
    for (let i = 0; i < rectangles.length; i++) {
    let rectData = rectangles[i];
    rect(rectData[0], rectData[1], rectData[2], rectData[3]);
  }
}
