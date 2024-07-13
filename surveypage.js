function surveyPage(){
centerPage();
surveyPageTitle();
surveyPageText();
}

function surveyEnd(){
centerPage(); 
surveyEndTitle();
qEndBackButtons();
qEndButtons();
}

function centerPage(){
  stroke(outlineColor);
  strokeWeight(6);
  fill(buttonsColor);
  rect(295, buttonY-rMoveY, pageWidth, pageHeight, buttonRadius)
}

function surveyPageTitle() { // creates 'SURVEY' title
  fill(219, 201, 162);
  stroke(outlineColor);
  strokeWeight(8);
  textSize(75);
  text('SURVEY', 440, 90);
}

function surveyEndTitle(){ // creates 'thank you' title
  strokeWeight(6);
  stroke(outlineColor);
  fill(bgColor);
  textSize(50);
  text('THANK YOU FOR', 387, 47);
  text('EXPLORING THIS SURVEY!', 274, 97);
}

function surveyBackButton(){
let tX = 80;
let tY = 15;
let back = mouseX>325 && mouseX<325+80 && mouseY>650 && mouseY<650+80;  
let menu = mouseX>795 && mouseX<795+80 && mouseY>650 && mouseY<650+80;
  
  if(back){
    stroke(bgColor);
    fill(buttonsColor);
  } else {
  stroke(outlineColor);
  fill(bgColor);
  }

  strokeWeight(6);
  circle(365, 690, 80); // back button
  
  strokeWeight(8);
  line(340, 690, 390, 690); // lines creating back arrow
  line(340, 690, 365, 665);
  line(340, 690, 365, 715);
  
  if(menu){
    stroke(bgColor);
    fill(buttonsColor);
  } else {
  stroke(outlineColor);
  fill(bgColor);
  }
  strokeWeight(6);
  circle(835, 690, 80); // menu button
  
  if(menu){
    fill(bgColor);
  } else {
    fill(outlineColor);
  }
  noStroke();
  triangle(730+tX, 700-tY, 780+tX, 700-tY, 755+tX, 680-tY); // roof of home icon
  rect(738+tX, 700-tY, 34, 25); // house of home icon
  
    if(menu){
    fill(buttonsColor);
  } else {
    fill(bgColor);
  }
  rect(750+tX, 710-tY, 10, 15, 10, 10, 0, 0); // door of home icon
}

function qEndBackButtons(){
let back = mouseX>325 && mouseX<325+100 && mouseY>630 && mouseY<630+100;  
let retake = mouseX>775 && mouseX<775+100 && mouseY>630 && mouseY<630+100; 
  
  if(back){
    stroke(bgColor);
    fill(buttonsColor);
  } else {
    stroke(outlineColor);
    fill(bgColor);
  }

  strokeWeight(8);
  circle(375, 680, 100); // back button
  
  strokeWeight(10);
  line(345, 680, 405, 680); // lines creating back arrow
  line(345, 680, 375, 650);
  line(345, 680, 375, 710);
  
  if(retake){
    stroke(bgColor);
    fill(buttonsColor);
  } else {
    stroke(outlineColor);
    fill(bgColor);
  }
  strokeWeight(8);
  circle(825, 680, 100); // retake button

if(retake){
stroke(bgColor);  
} else {
stroke(outlineColor);  
}
  
noFill();
strokeWeight(10);
circle(825, 680, 55); // reload circle
  
if(retake){
  fill(buttonsColor);
} else {
  fill(bgColor);
} 
noStroke();
arc(825, 680, 70, 255, 330, 30, PIE); // reload opening
  
if(retake){
  fill(bgColor);
} else {
  fill(outlineColor);
} 
triangle(853, 686, 859, 704, 832, 692); // reload arrow pointer
}

function surveyPageText(){
  let form = mouseX>435 && mouseX<435+150 && mouseY>590 && mouseY<590+150;
  let data = mouseX>615 && mouseX<615+150 && mouseY>590 && mouseY<590+150;
  let select = color(168, 74, 50, 200);
  let about = mouseX>315 && mouseX<315+220 && mouseY>130 && mouseY<130+200;
  let disclaimer = mouseX>665 && mouseX<665+220 && mouseY>130 && mouseY<130+200;
  let highlight = color(219, 201, 162, 150);
  let startRing = mouseX>496.5 && mouseX<496.5+201 && mouseY>339.5 && mouseY<339.5+201;
  let startRect = mouseX>583.5 && mouseX<583.5+25 && mouseY>300 && mouseY<300+100;
  let page = mouseX>295 && mouseX<295+610 && mouseY>110 && mouseY<110+650;
  
  if(about){
  noStroke();
  fill(bgColor);
  textSize(50);
  text('About', 321, 380);
  
  noStroke();
  fill(outlineColor);
  textSize(30);
  text('This survey', 308, 420);
  text('is for', 355, 455);
  text('exploring', 328, 490);
  text('student', 338, 525);
  text('housing options.', 308, 560);  
  } else if(startRing || startRect){
  noStroke();
  fill(outlineColor);
  textSize(50);
  text('About', 321, 380); 
  }
  
  if(disclaimer){
  noStroke();
  fill(bgColor);
  textSize(42);
  text('Disclaimer', 700, 375);
  
  noStroke();
  fill(outlineColor);
  textSize(30);
  text('This survey', 728, 420);
  text('does NOT', 737, 455);
  text('save your', 737, 490);
  text('results.', 754, 525);
  fill(bgColor);
  text('NOT', 810.5, 455);  
  } else if(startRing || startRect){
  noStroke();
  fill(outlineColor);
  textSize(42);
  text('Disclaimer', 700, 375);
  }
  
  noStroke();
  
  if(form){
  fill(outlineColor);
  textSize(36);
  text('Fill out', 324, 525);
  text('FORM to', 307, 560);
  text('save your', 302, 595);
  text('results!', 310, 630);
  fill(bgColor);
  text('FORM', 307, 560);  
  }
  
  if(data){
  fill(outlineColor);
  textSize(34);
  text('Form', 755, 420);
  text('responses', 728, 455);
  text('will be', 748, 490);
  text('used and', 725, 525);
  text('represented', 703, 560);
  text('in', 757, 595);
  textSize(36);
  fill(bgColor);
  text('DATA', 793, 596);  
  }

  surveyPageButtons();
}

function surveyPageButtons(){
  let form = mouseX>435 && mouseX<435+150 && mouseY>590 && mouseY<590+150;
  let data = mouseX>615 && mouseX<615+150 && mouseY>590 && mouseY<590+150;
  let select = color(168, 74, 50, 200);
  let about = mouseX>315 && mouseX<315+220 && mouseY>130 && mouseY<130+200;
  let disclaimer = mouseX>665 && mouseX<665+220 && mouseY>130 && mouseY<130+200;
  let highlight = color(219, 201, 162, 150);
  let startRing = mouseX>496.5 && mouseX<496.5+201 && mouseY>339.5 && mouseY<339.5+201;
  let startRect = mouseX>583.5 && mouseX<583.5+25 && mouseY>300 && mouseY<300+100;
  
  if(about){
    stroke(highlight);
    strokeWeight(15);
  } else {
    stroke(outlineColor);
    strokeWeight(8);
  }
  fill(outlineColor);
  rect(315, 130, 220, 200, 40); // about !
  
  if(disclaimer){
    stroke(highlight);
    strokeWeight(15);
  } else {
    stroke(outlineColor);
    strokeWeight(8);
  }
  fill(outlineColor);
  rect(665, 130, 220, 200, 40); // disclaimer ?
  
  if(about){
    stroke(bgColor);
  } else {
    stroke(buttonsColor);
  }
  fill(bgColor);
  textSize(200);
  strokeWeight(8);
  text('?', 365.5, 303);
  
  if(disclaimer){
    stroke(bgColor);
  } else {
    stroke(buttonsColor);
  }
  text('!', 743, 303);
  
if(startRing || startRect){
  strokeWeight(6);
  stroke(outlineColor);
  fill(bgColor);
  textSize(85);
  text("START", 461.5, 640);
  text("SURVEY", 423.5, 720);
  
    stroke(bgColor);
} else {
  
  surveyBackButton();
  
  if(form){
    stroke(select);
    fill(bgColor);
    strokeWeight(13);
  } else {
    stroke(bgColor);
    fill(bgColor);
    strokeWeight(6);
  }
  circle(510, 655, 150); // resources button
  
  if(data){
    stroke(select);
    fill(bgColor);
    strokeWeight(13);
  } else {
    stroke(bgColor);
    fill(bgColor);
    strokeWeight(6);
  }
  circle(690, 655, 150); // data button
  
  
  stroke(outlineColor);
  strokeWeight(15);
  fill(bgColor);
  circle(690, 655, 100); // data button circle ring
  
  noStroke();
  fill(buttonsColor);
  arc(690, 655, 115, 115, 0, 60, PIE); // data button pie
  fill(bgColor);
  circle(690, 655, 85); // data button center circle
  
  strokeWeight(6);
  stroke(outlineColor);
  rect(472, 605, 75, 100, 5); // resources paper 
  rect(472, 605, 30, 30, 5); // resources fold rect
  line(472, 635, 502, 605); // resources fold line
  
  stroke(bgColor);
  line(472-4, 635-4, 502-4, 605-4); // line covering excess
  line(472, 605, 472, 605+22);
  line(472, 605, 472+22, 605);
  noStroke();
  
  strokeWeight(8);
  stroke(outlineColor);
  line(502, 650, 527, 650); // lines on resources paper
  line(502, 665, 527, 665);
  line(502, 680, 527, 680);
  
  noStroke();
  fill(outlineColor);
  circle(492, 650, 8); // bullet points on resources paper
  circle(492, 665, 8);
  circle(492, 680, 8);
  
  stroke(outlineColor);
} // end else
  strokeWeight(28);
  fill(buttonsColor);
  circle(597, 440, 201); // start survey circle ring
  
  noStroke();
  fill(buttonsColor);
  arc(597, 440, 230, 230, 245, 295, PIE); // start survey pie
  
  if(startRing || startRect){
    fill(bgColor);
  } else {
    fill(outlineColor);
  }
  rect(583.5, 300, 28, 100); // start survey rect
}

function qEndButtons(){
// let data = mouseX> && mouseX< && mouseY> && mouseY<;
let data = mouseX>325 && mouseX<325+225 && mouseY>140 && mouseY<140+225;
let resources = mouseX>650 && mouseX<650+225 && mouseY>140 && mouseY<140+225;
let form = mouseX>470 && mouseX<470+260 && mouseY>440 && mouseY<440+290;   
let bgHighlight = color(219, 201, 162, 180);
let outlineHighlight = color(168, 74, 50, 200);

  if(data){
    strokeWeight(13);
    stroke(bgHighlight);
  } else {
    strokeWeight(6);
    stroke(outlineColor);
  }
fill(outlineColor);
circle(437.5, 252.5, 225); // data circle 
  

noStroke();
fill(buttonsColor);
circle(392, 255, 104); // biggest buttonsColor circle
circle(486, 283, 83); // buttonsColor circle
fill(bgColor);
circle(430, 326, 48); // smallest bgColor circle
circle(468.5, 202, 72); // bgColor circle
  

  
  if(resources){
    strokeWeight(13);
    stroke(bgHighlight);
  } else {
    strokeWeight(6);
    stroke(outlineColor);
  }
fill(outlineColor);
circle(762.5, 252.5, 225); // resources circle
  

noStroke();
fill(bgColor);
push();
translate(764, 213);
rotate(25);
rect(0, 0, 35, 133, 15); // magnify glass handle
pop();
  
strokeWeight(15);
stroke(bgColor);
fill(outlineColor);
circle(780, 220, 100); // magnify class circle
noStroke();
  
  
if(data){
strokeWeight(2);
textSize(30);
text('VIEW DATA', 357, 415);  
}
  
if(resources){
strokeWeight(2);
textSize(30);
text('RESOURCES', 665, 415);  
}
  
if(form){
stroke(outlineHighlight);
strokeWeight(20);
} else {
noStroke();  
}
fill(bgColor);
rect(470, 440, 260, 290, 30); // form button
  
stroke(outlineColor);
strokeWeight(8);
rect(510, 480, 180, 210, 5); // form sheet
  
noStroke();
fill(outlineColor);
for(let y=533; y<=660; y+=27){ // form text
  rect(540, y, 19, 19);
  rect(569, y, 91, 19);
}
 
fill(bgColor);
stroke(outlineColor);
strokeWeight(8);
rect(510, 480, 60, 60, 5); // form sheet fold
  
noStroke();
rect(505, 476, 10, 60); // covering excess
rect(506, 476, 60, 10); // covering excess
strokeWeight(8);
stroke(outlineColor);
line(510, 538, 568, 480); // fold crease line
  
strokeWeight(2);
stroke(outlineColor);
fill(outlineColor);
textSize(25);
text('FORM', 580, 518); // test 'form'
  
noStroke();
fill(bgColor);
rect(633, 494.5, 20, 5); // covering 'M'
}