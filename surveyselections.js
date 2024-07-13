function surveySelected(){ // page shown after clicking 'Yes'
  let s = 13;
  let d = 130;
  let r = 65;
  let x = 145;
  let dataY = 350-s;
  let rY = 500-s;
  let t = 117
  let m = 147;
   
  let dBack = 60;
  let rBack = 30;
  let xBack = 110;
  let yB = 500-s;
  let yBack = yB+d+50;
  let bHovered = mouseX>180 && mouseX<240 && mouseY>520 && mouseY<580;
  let takeSurvey = mouseX>85 && mouseX<85+250 && mouseY>370 && mouseY<370+125;
  
  if(takeSurvey){ // if 'take survey' button hovered (button)
  stroke(bgColor);
  strokeWeight(8);
  fill(outlineColor); 
  } else { // if not hovered
  stroke(bgColor);
  strokeWeight(8);
  fill(buttonsColor);
  }

  rect(85, 370, 250, 125, 30);
  
  if(takeSurvey){ // if 'take survey' button hovered (text)
  stroke(buttonsColor);
  } else { // if not hovered
  stroke(outlineColor)
  }

  strokeWeight(6);
  fill(bgColor);
  textSize(50);
  text('TAKE', 147, 425);
  text('SURVEY', 109, 475);
  
  if(bHovered){ // if back hovered
  stroke(bgColor);
  fill(buttonsColor);
  } else {// back not hovered 
  stroke(outlineColor);
  fill(bgColor);
  }
  strokeWeight(6);
  circle(210, yBack-t, dBack); // back circle
  line(195, 667-t, 225, 667-t);
  line(195, 667-t, 210, 652-t);
  line(195, 667-t, 210, 682-t);
}

 function noSelected(){
  let s = 13;
  let d = 130;
  let r = 65;
  let x = 145;
  let dataY = 350-s;
  let rY = 500-s;
   
  let dBack = 60;
  let rBack = 30;
  let xBack = 110;
  let yB = 500-s;
  let yBack = yB+d+50;
  
  let buttonHovered = mouseX > surveyButtonX && mouseX < surveyButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  let dHovered = mouseX>x && mouseX<x+d && mouseY>dataY && mouseY<dataY+d;
  let rHovered = mouseX>x && mouseX<x+d && mouseY>rY && mouseY<rY+d;
  let bHovered = mouseX>180 && mouseX<240 && mouseY>637 && mouseY<697;
   
  if(noSurvey == true){
  
  if(buttonHovered){ // survey button hovered
  stroke(outlineColor); 
  } else {
  stroke(buttonsColor);
  }
  fill(255);
  strokeWeight(6);
  circle(x+r, dataY+r, d); // data circle
  circle(x+r, rY+r, d); // resources circle 
  strokeWeight(8);
  circle(x+80, 535, 50); // magnify glass circle
  
  strokeWeight(6); 
  noStroke();
  if(buttonHovered){
    fill(outlineColor);
  } else {
    fill(buttonsColor);
  }
  rect(x+25, 415, 17, 20);
  rect(x+25+21, 385, 17, 50);
  rect(x+25+42, 400, 17, 35);
  rect(x+25+63, 370, 17, 65);  
  push();
  translate(x+58, 547);
  rotate(40);
  rect (0,0, 18, 50, 5);
  pop();
    
  if(dHovered){
    strokeWeight(6);
    fill(bgColor);
    stroke(outlineColor);
    circle(x+r, dataY+r, d); // data circle
    
    noStroke();
    fill(outlineColor);
  rect(x+25, 415, 17, 20);
  rect(x+25+21, 385, 17, 50);
  rect(x+25+42, 400, 17, 35);
  rect(x+25+63, 370, 17, 65);  
  }
    
  if(rHovered){
    strokeWeight(6);
    fill(bgColor);
    stroke(outlineColor);  
    circle(x+r, rY+r, d); // resources circle 
    strokeWeight(8);
    circle(x+80, 535, 50); // magnify glass circle
  
  noStroke();
  fill(outlineColor);
  push();
  translate(x+58, 547);
  rotate(40);
  rect (0,0, 18, 50, 5);
  pop();
  }
    
  if(bHovered){
    fill(buttonsColor);
    stroke(bgColor);
  } else {
  fill(bgColor);
  stroke(outlineColor);
  }
  strokeWeight(6);
  circle(210, yBack, dBack); // back circle
  line(195, 667, 225, 667);
  line(195, 667, 210, 652);
  line(195, 667, 210, 682);

  if(buttonHovered){ // survey button hovered
  stroke(outlineColor);
  fill(outlineColor);
  } else {
  stroke(buttonsColor);
  fill(buttonsColor);
  } 
  strokeWeight(2);
  textSize(25);
  text('EXPLORE OPTIONS', 92, 322);
  }
 }

function helpSelected(){
  let s = 13;
  let d = 130;
  let r = 65;
  let x = 145;
  let dataY = 350-s;
  let rY = 500-s;
   
  let dBack = 60;
  let rBack = 30;
  let xBack = 110;
  let yB = 500-s;
  let yBack = yB+d+50;
  let bDown = 5;
  let buttonHovered = mouseX > surveyButtonX && mouseX < surveyButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight;
  let bHovered = mouseX>180 && mouseX<240 && mouseY>642 && mouseY<702;
  
  helpTitle();
  
  if(buttonHovered){ // hovered 'survey' button
  stroke(outlineColor);
  } else {
  stroke(buttonsColor);
  }
  strokeWeight(6);
  fill(255);
  rect(136.5-6, 357-14, 147, 45, 20); // survey button
  rect(159.5-6, 457-14, 101, 45, 20); // data button
  rect(102.5-6, 557-14, 215, 45, 20); // resources button
  
  if(buttonHovered){ // button text
  fill(outlineColor);
  } else {
  fill(buttonsColor);
  }
  noStroke();
  textSize(30);
  text('SURVEY', (136.5-6)+12, 390-14);
  text('DATA', (159.5-6)+12, 490-14);
  text('RESOURCES', (102.5-6)+12, 590-14);
  
  optionsHovered();
 
  if(bHovered){ // 'back' button hovered
  stroke(bgColor);
  fill(buttonsColor);
  } else {
  stroke(outlineColor);
  fill(bgColor);
  }
  circle(x+r, yBack+bDown, dBack); // back circle
  line(195, 667+bDown, 225, 667+bDown);
  line(195, 667+bDown, 210, 652+bDown);
  line(195, 667+bDown, 210, 682+bDown);
}

function helpTitle(){
    if (mouseX > surveyButtonX && mouseX < surveyButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
    stroke(buttonsColor);
    fill(buttonsColor);
  } else{
    stroke(outlineColor);
    fill(outlineColor);
  }
  strokeWeight(4);
  textSize(40);
  text('HELP', 157, 331);
}

function optionsHovered(){
  let sHovered = mouseX>(136.5-6) && mouseX<(136.5-6)+147 && mouseY>357-14 && mouseY<357+45-14;
  let dHovered = mouseX>(159.5-6) && mouseX<(159.5-6)+101 && mouseY>457-14 && mouseY<457+45-14;
  let rHovered = mouseX>(102.5-6) && mouseX<(102.5-6)+215 && mouseY>557-14 && mouseY<557+45-14;
  
  strokeWeight(6);
  
  if(sHovered){ // survey button hovered on survey help page
  stroke(buttonsColor);
  fill(bgColor);
  rect(136.5-6, 357-14, 147, 45, 20); // survey button 
  stroke(bgColor);
  fill(255);
  rect(159.5-6, 457-14, 101, 45, 20); // data button
  rect(102.5-6, 557-14, 215, 45, 20); // resources button
    
  noStroke();
  fill(buttonsColor);
  textSize(23);
  text('Take survey to explore', 92, 423-14);
  text('UT housing options', 107, 446-14);
  }
  
  if(dHovered){ // data button
  stroke(buttonsColor);
  fill(bgColor);
  rect(159.5-6, 457-14, 101, 45, 20); // data button
  stroke(bgColor);
  fill(255);
  rect(136.5-6, 357-14, 147, 45, 20); // survey button 
  rect(102.5-6, 557-14, 215, 45, 20); // resources button
  
  noStroke();
  fill(buttonsColor);
  textSize(23);
  text('View data on', 140, 524-14);
  text('UT student housing', 106, 547-14);
  }
  
  if(rHovered){ // resources button
  stroke(buttonsColor);
  fill(bgColor);
  rect(102.5-6, 557-14, 215, 45, 20); // resources button
  stroke(bgColor);
  fill(255);
  rect(136.5-6, 357-14, 147, 45, 20); // survey button 
  rect(159.5-6, 457-14, 101, 45, 20); // data button
    
  noStroke();
  fill(buttonsColor);
  textSize(23);
  text('Link to doc with', 129, 624-14);
  text('more housing resources', 87, 647-14);
  }
  
  noStroke();
  textSize(30); 
  
  if(sHovered){ // survey text 
  fill(buttonsColor);
  text('SURVEY', (136.5-6)+12, 390-14);
  fill(bgColor);
  text('DATA', (159.5-6)+12, 490-14);
  text('RESOURCES', (102.5-6)+12, 590-14);
  }
  
  if(dHovered){ // data text 
  fill(buttonsColor);
  text('DATA', (159.5-6)+12, 490-14);
  fill(bgColor);
  text('SURVEY', (136.5-6)+12, 390-14);
  text('RESOURCES', (102.5-6)+12, 590-14);
  }
  
  if(rHovered){ // resources text 
  fill(buttonsColor);
  text('RESOURCES', (102.5-6)+12, 590-14);
  fill(bgColor);
  text('SURVEY', (136.5-6)+12, 390-14);
  text('DATA', (159.5-6)+12, 490-14);
    }
}