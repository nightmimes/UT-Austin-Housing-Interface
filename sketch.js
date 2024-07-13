let bgColor;
let outlineColor;
let buttonsColor;
let surveyButtonX = 35;
let dataButtonX = 425;
let resourceButtonX = 815;
let buttonY = 250;
let buttonWidth = 350;
let buttonHeight = 500;
let buttonRadius = 30;
let pageWidth = 610;
let pageHeight = 650;
let backButtonX = 525;
let backButtonY = 680;
let backButtonW = 150;
let backButtonH = 60;
let backButtonR = 60;
let backButtonD = 80;
let d = 80;
let r = 40;
let x = 600-r;
let y = 700-r;

let rMoveX;
let rMoveY;
let dMoveY;
let table;
let researchPercentages = [];
let surveyPercentages = [];
let barWidth = 30;
let barHeight = 490;
let researchX = 690;
let surveyX = 260;
let barsY = 150;
let cornerRadius = 15;
let c1, c2, c3;
let mainMenu = true;

let dataPressed = false;
let playButton = false;
let animateTower = false;
let displayData = false;
let speed1 = 0.1; // of oscillating button
let speed2 = 1.8; // speed of towers separating
let growth = true;
let playD = 100; // diameter of play button
let speed3 = 1.75; // oscillating colors
let angle = 0;

let rX = 600;

let sTopX = 525;
let sTopW = 75;
let sMainX = 500;
let sMainW = 100;
let roofX = 480;
let roofW = 120;
let bottomX = 470;
let bottomW = 130;
let baseX = 445;
let baseW = 155;
let triA = 720;
let triB = 755;
let originalRX, originalSTopX, originalSMainX, originalRoofX, originalBottomX, originalBaseX, originalTriA, originalTriB; // reset original position


let resourcePressed = false;
let surveyPressed = false; // 'start survey' page

let yesSurvey = false;
let noSurvey = false;
let helpSurvey = false;
let surveyBoxes = true;

let qScreen = false; // question's bg box and title box
let threeOptions = false; // questions with three options
let fourOptions = false; // questions with four options
let qOne = false;
let qTwo = false;
let qThree = false;
let qFour = false;
let qEnd = false; // survey end page
let endBackQOne = false;
let backQTwo = false;
let backUndergrad = false;

// loads data for data viz
function preload() { // load csv data
  table = loadTable('housingdata.csv', 'csv', 'header');
}


function setup() {
  createCanvas(1200, 800);
  angleMode(DEGREES);
  readData(); // read csv data
  intVars(); // initializes variables not defined globally
} 

function draw() {
  background(bgColor);
  
  sQuestionConditions();
}

function intVars(){
  bgColor = color(219, 201, 162);
  outlineColor = color(168, 74, 50);
  buttonsColor = color(214, 96, 36);
  roofColor = color(173, 97, 71);
  
  c1 = color(237, 128, 76);
  c2 = color(227, 135, 82);
  c3 = color(207, 149, 114);
  
  c1Hover = color(230, 110, 53);
  c2Hover = color(237, 109, 47);
  c3Hover = color(224, 111, 40);
  
  rMoveX = 550;
  rMoveY = 140; 
  moveUp = 125;
  moveDown = 50;
  m = 150;
  incPage = 340;
  shiftBar = 32;
  moveTower = 90;
  rTop = 20;
  
  originalRX = 600;
  originalSTopX = 525;
  originalSMainX = 500;
  originalRoofX = 480;
  originalBottomX = 470;
  originalBaseX = 445;
  originalTriA = 720;
  originalTriB = 755;
}

function credits(){
  let title = mouseX>190 && mouseX<190+820 && mouseY>45 && mouseY<45+155;
  let survey = mouseX > surveyButtonX && mouseX < surveyButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  let data = mouseX > dataButtonX && mouseX < dataButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  let resources = mouseX > resourceButtonX && mouseX < resourceButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  
stroke(outlineColor);
fill(buttonsColor);
strokeWeight(3);
textSize(25);
text('By Kel S.', 810, 210);
  
  /*if(title || survey || data || resources){
    stroke(outlineColor);
    fill(buttonsColor);
    
  }*/
}

function backButton(){ 
let b = mouseX > x && mouseX < x+d && mouseY > y && mouseY < y+d;
  
if(b){ // if back button is hovered
fill(buttonsColor);
stroke(bgColor);
strokeWeight(6);
} else {
fill(bgColor);
stroke(outlineColor);
strokeWeight(6);
}
circle(600, 700, 80);
  
noStroke();
  
if(b){
fill(bgColor);  
} else {
fill(buttonsColor);
rect(595, 705, 10, 15, 10, 10, 0, 0); // door
fill(outlineColor);
}
triangle(575, 695, 625, 695, 600, 675);
rect(583, 695, 34, 25);
  
if(b){
fill(buttonsColor);  
} else {
fill(bgColor);
}
rect(595, 705, 10, 15, 10, 10, 0, 0); // door
}

function sQuestionConditions(){
   if(mainMenu == true){ // if main menu is true 
      menu();
  } else if (resourcePressed == true){
      mainMenu = false;
      resourcePage();
    } else if(dataPressed == true){
      mainMenu = false;
      dataPage();
    } else if(surveyPressed == true){
      mainMenu = false;
      surveyPage();
    }
  if(yesSurvey == true || noSurvey == true || helpSurvey == true){
    surveyBoxes = false;
  }
  
  if(qScreen == true){
    questionPage();
  }
  
  if(qEnd == true){
    surveyEnd();
  }
  
  if(threeOptions == true){
    threeChoices();
  }
  
  if(fourOptions == true){
    fourChoices();
  }
  
  if(qOne == false){
    threeOptions = false;
  }
  
  if(qTwo == false){
    fourOptions = false;
  }
  
  if(qThree == false){
    fourOptions = false;
  }
  
  if(qFour == false){
    threeOptions = false;
  }

  
  if(qOne == true){
    endBackQOne = false;
    threeOptions = true;
    qNumOne();
  }
  
  if(qTwo == true){
    fourOptions = true;
    qNumTwo();
  }
  
  if(qThree == true){
    fourOptions = true;
    qNumThree();
  }
  
  if(qFour == true){
    threeOptions = true;
    qNumFour();
  }
}