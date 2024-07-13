function questionPage(){ // question page template
  centerSurveyPage(); // background box
  surveyPageTitle(); // title
  questionTitleBox(); // question's box
 qBackButton();
}

function centerSurveyPage(){ // center background rect
  stroke(outlineColor);
  strokeWeight(6);
  fill(buttonsColor);
  rect(125, 110, 950, 650, 30);
}

function questionTitleBox(){
  stroke(outlineColor);
  strokeWeight(8);
  fill(bgColor);
  rect(125+50, 110+35, 850, 160, 30);
}

function qBackButton(){
let backX = 405;
let menuX = 715;
let y = 665;
let d = 80;
let r = 40;
let tXm = 155;
let tYm = 5;
let tXb = 15;
let tYb = 40;
// mouseX> && mouseX< && mouseY> && mouseY<;
let back = mouseX>backX && mouseX<backX+d && mouseY>y && mouseY<y+d;
let menu = mouseX>menuX && mouseX<menuX+d && mouseY>y && mouseY<y+d;
  if(back){
  fill(buttonsColor);
  stroke(bgColor); 
  } else {
  fill(bgColor);
  stroke(outlineColor);  
  }
  strokeWeight(6);
  circle(backX+r, y+r, 80);
  
  if(menu){
  fill(buttonsColor);
  stroke(bgColor); 
  } else {
  fill(bgColor);
  stroke(outlineColor);  
  }
  strokeWeight(6);
  circle(menuX+r, y+r, 80);
  
  if(back){
    stroke(bgColor);
  } else {
    stroke(outlineColor);
  }
  strokeWeight(8);
  line(backX+tXb, y+tYb, 470, y+tYb);
  line(backX+tXb, y+tYb, 445, 680);
  line(backX+tXb, y+tYb, 445, 730);
  
  noStroke();
  
  if(menu){
    fill(bgColor);
  } else {
    fill(outlineColor);
  }
  triangle(575+tXm, 695+tYm, 625+tXm, 695+tYm, 600+tXm, 675+tYm);
  rect(583+tXm, 695+tYm, 34, 25);
  
  if(menu){
    fill(buttonsColor);
  } else {
    fill(bgColor);
  }
  rect(595+tXm, 705+tYm, 10, 15, 10, 10, 0, 0); // door
}

function threeChoices(){
  let boxOne = mouseX>155 && mouseX<155+270 && mouseY>350 && mouseY<350+270;
let boxTwo = mouseX>465 && mouseX<465+270 && mouseY>350 && mouseY<350+270;
let boxThree = mouseX>775 && mouseX<775+270 && mouseY>350 && mouseY<350+270;
  
    noStroke();
    fill(outlineColor);
 for(let x=155; x<=890; x+=310){
    rect(x, 335+15, 270, 270, 30);
  }
  stroke(bgColor);
  strokeWeight(6);
  fill(outlineColor);
  if(boxOne){
  rect(155, 350, 270, 270, 30);  
  }
  if(boxTwo){
  rect(465, 350, 270, 270, 30);
  }
  if(boxThree){
  rect(775, 350, 270, 270, 30);
  }
}

function fourChoices(){
let topL = mouseX>155 && mouseX<155+425 && mouseY>350 && mouseY<350+115;
let topR = mouseX>620 && mouseX<620+425 && mouseY>350 && mouseY<350+115;
let bottomL = mouseX>155 && mouseX<155+425 && mouseY>505 && mouseY<505+115;
let bottomR = mouseX>620 && mouseX<620+425 && mouseY>505 && mouseY<505+115;
  
    noStroke();
    fill(outlineColor);
 for(let x=155; x<1045; x+=465){
    rect(x, 335+15, 425, 115, 30);
    rect(x, 505, 425, 115, 30);
  }
  
  stroke(bgColor);
  strokeWeight(6);
  fill(outlineColor);
  if(topL){
    rect(155, 350, 425, 115, 30);
  }
  if(topR){
    rect(620, 350, 425, 115, 30);
  }
  if(bottomL){
    rect(155, 505, 425, 115, 30);
  }
  if(bottomR){
    rect(620, 505, 425, 115, 30);
  }
}

function qNumOne(){
let boxOne = mouseX>155 && mouseX<155+270 && mouseY>350 && mouseY<350+270;
let boxTwo = mouseX>465 && mouseX<465+270 && mouseY>350 && mouseY<350+270;
let boxThree = mouseX>775 && mouseX<775+270 && mouseY>350 && mouseY<350+270;
  
if(boxOne || boxTwo || boxThree){
  noStroke();
  fill(buttonsColor);
  textSize(38);
  if(boxOne){
  text('I am a current', 171, 505);
  text('UT student', 194, 550);
  text('staff, or faculty.', 163, 595);
  }
  if(boxTwo){
  text('But I am', 529, 505);
  text('affiliated with', 490, 550);
  text('UT otherwise.', 482, 595);
  }
  if(boxThree){
  text('I am not', 840, 505);
  text('affiliated', 839, 550);
  text('with UT.', 843, 595);
  }
}
  stroke(outlineColor);
  strokeWeight(4);
  fill(outlineColor);
  textSize(55);
  text('Are you a student, staff, or faculty', 191, 214);
  text('at UT Austin?', 430, 275);
  
  stroke(bgColor);
  strokeWeight(6);
  fill(bgColor);
  textSize(95);
  text('YES', 195, 455);
  text('NO', 530, 455);
  text('NO', 841, 455); 
  if(boxOne){
    stroke(buttonsColor);
    text('YES', 195, 455);
  }
  if(boxTwo){
    stroke(buttonsColor);
    text('NO', 530, 455);
  }
  if(boxThree){
    stroke(buttonsColor);
    text('NO', 841, 455); 
  }
}

function qNumTwo(){
let topL = mouseX>155 && mouseX<155+425 && mouseY>350 && mouseY<350+115;
let topR = mouseX>620 && mouseX<620+425 && mouseY>350 && mouseY<350+115;
let bottomL = mouseX>155 && mouseX<155+425 && mouseY>505 && mouseY<505+115;
let bottomR = mouseX>620 && mouseX<620+425 && mouseY>505 && mouseY<505+115;
  
  stroke(bgColor);
  strokeWeight(4);
  fill(bgColor);
  textSize(45);
  text('UNDERGRADUATE', 163, 424);
  textSize(62);
  text('GRADUATE', 665, 430);
  text('OTHER', 720, 585);
  textSize(52);
  text('STAFF/FACULTY', 163, 581);
  
  stroke(buttonsColor);
  if(topL){
    textSize(45);
    text('UNDERGRADUATE', 163, 424);
  }
  if(topR){
    textSize(62);
    text('GRADUATE', 665, 430);
  }
  if(bottomL){
    textSize(52);
    text('STAFF/FACULTY', 163, 581);
  }
  if(bottomR){
    textSize(62);
    text('OTHER', 720, 585);
  }
  
  stroke(outlineColor);
  strokeWeight(4);
  fill(outlineColor);
  textSize(68);
  text('What is your classification?', 192, 245); 
}
function qNumThree(){
let topL = mouseX>155 && mouseX<155+425 && mouseY>350 && mouseY<350+115;
let topR = mouseX>620 && mouseX<620+425 && mouseY>350 && mouseY<350+115;
let bottomL = mouseX>155 && mouseX<155+425 && mouseY>505 && mouseY<505+115;
let bottomR = mouseX>620 && mouseX<620+425 && mouseY>505 && mouseY<505+115;
  
  stroke(bgColor);
  strokeWeight(4);
  fill(bgColor);
  textSize(65);
  text('JUNIOR', 245, 586);
  text('SENIOR+', 690, 586);
  textSize(60);
  text('FRESHMEN', 198, 429);
  textSize(55);
  text('SOPHOMORE', 650, 428);
  stroke(buttonsColor);
  if(topL){
  textSize(60);
  text('FRESHMEN', 198, 429);
  }
  if(topR){
  textSize(55);
  text('SOPHOMORE', 650, 428);
  }
  if(bottomL){
  textSize(65);
  text('JUNIOR', 245, 586);
  }
  if(bottomR){
  textSize(65);
  text('SENIOR+', 690, 586);
  }
  
  stroke(outlineColor);
  strokeWeight(4);
  fill(outlineColor);
  textSize(75);
  text('What year are you?', 272, 245);  
  
  noStroke();
  fill(outlineColor);
  rect(407, 374, 40, 10);
  rect(852, 377, 40, 10);
}

function qNumFour(){
let boxOne = mouseX>155 && mouseX<155+270 && mouseY>350 && mouseY<350+270;
let boxTwo = mouseX>465 && mouseX<465+270 && mouseY>350 && mouseY<350+270;
let boxThree = mouseX>775 && mouseX<775+270 && mouseY>350 && mouseY<350+270;
  
if(boxOne || boxTwo || boxThree){
  noStroke();
  fill(buttonsColor);
  if(boxOne){
  textSize(34);
  text('Apartments', 201, 513);
  text('Condos', 231, 543);
  text('Houses', 232, 573);
  text('Co-Ops', 231, 603);
  }
  if(boxTwo){
  textSize(40);
  text('Dormitories', 497, 550);
  }
  if(boxThree){
  textSize(30);
  text('Dobie', 871, 555);
  text('2400 Nueces', 821, 580);
  text('UHD Apartments', 796, 605);
  }
}
  
  stroke(bgColor);
  strokeWeight(4);
  fill(bgColor);
  textSize(65);
  text('OFF-', 212, 415);
  text('ON-', 540, 415);
  text('UHD', 839, 470);
  
  textSize(57);
  text('CAMPUS', 168.5, 475);
  text('CAMPUS', 479, 475);
  text('OTHER', 810.5, 406);
  
  textSize(53);
  text('HOUSING', 786.5, 525);
  
  stroke(buttonsColor);
  strokeWeight(4);
  fill(bgColor);
  if(boxOne){
  textSize(65);
  text('OFF-', 212, 415);
  textSize(57);
  text('CAMPUS', 168.5, 475);
  }
  if(boxTwo){
  textSize(65);
  text('ON-', 540, 415);
  textSize(57);
  text('CAMPUS', 479, 475);
  }
  if(boxThree){ 
  textSize(57);
  text('OTHER', 810.5, 406);
  textSize(65);
  text('UHD', 839, 470);
  textSize(53);
  text('HOUSING', 786.5, 525);
  }
  
  stroke(outlineColor);
  strokeWeight(4);
  fill(outlineColor);
  textSize(64);
  text('Where do you currently live?', 196, 242); 
  
  noStroke();
  fill(outlineColor);
  rect(250, 422.25, 40, 10);
  rect(560, 422.25, 40, 10);
}