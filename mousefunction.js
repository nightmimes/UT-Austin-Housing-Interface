function mousePressed(){ 
  
if(dataPressed == true){
  if(playButton == true) {
    if (mouseX > 550 && mouseX < 550 + 100 && mouseY > 360 && mouseY < 360 + 100) {
      playButton = false;
      animateTower = true;
    }
  }  
}
  
if(mainMenu == true) { // if main menu is true
  if(mouseX > resourceButtonX && mouseX < resourceButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight){ // if resource button pressed
    mainMenu = false;
    resourcePressed = true; // set resourcePressed to true
  } 
  if(mouseX > dataButtonX && mouseX < dataButtonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight){ // otherwise if data button is pressed
    mainMenu = false;
    dataPressed = true; // set dataPressed to true
    playButton = true;
  } 
  
// survey button Yes No options
  
sOptionsBackButton();
  
yesOptions();
  
noOptions();
  
helpOptions();

selectYesNoHelp();

} 
  
if(mainMenu == false){ // if menu false and resource or data pressed is true
  if(mouseX > x && mouseX < x+d && mouseY > y && mouseY < y+d){ // if back button pressed
     resetTowerPositions(); // resets animation to original position
    if(resourcePressed == true){
      resourcePressed = false;
      mainMenu = true;
    }
    if(dataPressed == true){
      playButton = false;
      animateTower = false;
      displayData = false;
      dataPressed = false;
      mainMenu = true;
    }
  }
}
 
  
if(mainMenu == false && resourcePressed == true){
  herePressed();
  } 
  
startSurveyButtons();
  
backMenu();
  
surveyEndButtons();
  
qFourButtons();
  
qThreeButtons();
  
qTwoButtons();
  
qOneButtons();
  
questionsStarted();
  

}

function sOptionsBackButton(){
    if(yesSurvey == true){
    if(mouseX>180 && mouseX<240 && mouseY>520 && mouseY<580){ // 'yes' back button
     yesSurvey = false; // set yesSurvey to false
      surveyBoxes = true;
    }
  }
  
  if(noSurvey == true){
    if(mouseX>180 && mouseX<240 && mouseY>637 && mouseY<697){ // if 'no' back button pressed
    noSurvey = false; // set noSurvey to false  
    surveyBoxes = true;
  }
  }
  
  if(helpSurvey == true){
   if(mouseX>180 && mouseX<240 && mouseY>642 && mouseY<702){ // if 'help' back button pressed
     helpSurvey = false;
     surveyBoxes = true;
   } 
  }
}

function startSurveyButtons(){ // conditions for buttons on survey page
  let form = mouseX>435 && mouseX<435+150 && mouseY>590 && mouseY<590+150;
  let data = mouseX>615 && mouseX<615+150 && mouseY>590 && mouseY<590+150;
  
  
let back = mouseX>325 && mouseX<325+80 && mouseY>650 && mouseY<650+80;  
let menu = mouseX>795 && mouseX<795+80 && mouseY>650 && mouseY<650+80;
  
  if(surveyPressed == true && mainMenu == false){ // if survey page is true
    if(back){ // if back pressed on survey page
      surveyPressed = false;
      yesSurvey = true;
      mainMenu = true;
    }
    if(menu){ // if menu pressed on survey page
      surveyPressed = false;
      mainMenu = true;
    }
    if(form){ // if form pressed on survey page
      window.open("https://forms.gle/CMLyaik2YHi74YRq6"); // open survey form
    }
    if(data){ // if data pressed on survey page
      surveyPressed = false;
      dataPressed = true;
      playButton = true;
    }
  }  
}

function yesOptions(){
    if(mouseX>85 && mouseX<85+250 && mouseY>370 && mouseY<370+125){ // pressed 'TAKE SURVEY' button after 'yes' selection
    if(yesSurvey == true){
      surveyPressed = true;
      mainMenu = false;
    }
    if(mainMenu == false){
      yesSurvey = false;
    }
  }
}

function noOptions(){
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
  let dHovered = mouseX>x && mouseX<x+d && mouseY>dataY && mouseY<dataY+d;
  let rHovered = mouseX>x && mouseX<x+d && mouseY>rY && mouseY<rY+d;

       if(dHovered){ // pressed 'data' button after 'no' selection
       if(noSurvey == true){
        dataPressed = true;
        playButton = true;
        mainMenu = false;
        }
       if(mainMenu == false){
        noSurvey = false;
       }
     }
  
    if(rHovered){ // pressed 'resources' button after 'no' selection
      if(noSurvey == true){
       resourcePressed = true;
       mainMenu = false;
       }
      if(mainMenu == false){
        noSurvey = false;
       }
     }
}

function helpOptions(){
     if(mouseX>(159.5-6) && mouseX<(159.5-6)+101 && mouseY>457-14 && mouseY<457+45-14){ // pressed 'data' button after 'help' selection
     if(helpSurvey == true){
      dataPressed = true;
      playButton = true;
      mainMenu = false;
      }
     if(mainMenu == false){
      helpSurvey = false;
  }
   }
  
   if(mouseX>(102.5-6) && mouseX<(102.5-6)+215 && mouseY>557-14 && mouseY<557+45-14){ // pressed 'resources' button after 'help' selection
     if(helpSurvey == true){
     resourcePressed = true;
     mainMenu = false;
   } if(mainMenu == false){
      helpSurvey = false;
  }
  } 
  
  if(mouseX>(136.5-6) && mouseX<(136.5-6)+147 && mouseY>357-14 && mouseY<357+45-14){ // pressed 'survey' button after 'help' selection
    if(helpSurvey == true){
      surveyPressed = true;
      mainMenu = false;
    } if(mainMenu == false){
      helpSurvey = false;
    }
  }
}

function selectYesNoHelp(){
      if(yesSurvey == false){ // if yesSurvey is false
    if(mouseX > 100 && mouseX < 100 + 60 && mouseY > 405 + 40 && mouseY < (405 + 40) + 60){ // if 'yes' box pressed
      yesSurvey = true; // set to true
  }
  }
  
  if(noSurvey == false){ // if noSurvey is false
    if(mouseX>100 && mouseX<100+60 && mouseY>535 && mouseY<535+60){ // if 'no' box pressed
      noSurvey = true; // set to true
    }
  }
  
  if(helpSurvey == false){
    if(mouseX>100 && mouseX<100+60 && mouseY>625 && mouseY<625+60){ // if 'help' box pressed
      helpSurvey = true; // set to true
    }
  }
}

function questionsStarted(){
let startRing = mouseX>496.5 && mouseX<496.5+201 && mouseY>339.5 && mouseY<339.5+201;
let startRect = mouseX>583.5 && mouseX<583.5+25 && mouseY>300 && mouseY<300+100;
  
  if(startRing || startRect){ // if power button icon pressed on survey page
    if(surveyPressed == true){
      qScreen = true;
      qOne = true;
      surveyPressed = false;
    }
    }
} 

function backMenu(){ // back menu buttons on survey
let backX = 405;
let menuX = 715;
let y = 665;
let d = 80;
let back = mouseX>backX && mouseX<backX+d && mouseY>y && mouseY<y+d;
let menu = mouseX>menuX && mouseX<menuX+d && mouseY>y && mouseY<y+d;
  if(back){ // back button pressed on survey
    if(qOne == true){ // if back is pressed on question one
      qScreen = false;
      qOne = false;
      surveyPressed = true;
    }
    if(qTwo == true){ // if back is pressed on question two
      qTwo = false;
      qOne = true;
    }
    if(qThree == true){ // if back is pressed on question three
      qThree = false;
      backUndergrad = false;
      qTwo = true; 
    }
    
    if(qFour == true){
      qFour = false;
      if(backQTwo == true){
        qTwo = true;
      } else {
      qThree = true;
    }
    }
  }
  if(menu){ // menu button pressed on survey
    if(qOne == true){
      qScreen = false;
      qOne = false;
      mainMenu = true;
    }
    if(qTwo == true){
      qScreen = false;
      qTwo = false;
      mainMenu = true;  
    }
    if(qThree == true){
      qScreen = false;
      qThree = false;
      mainMenu = true;  
    }
    if(qFour == true){
      qScreen = false;
      qFour = false;
      mainMenu = true;  
    }
  }
}

function qOneButtons(){
  if(mouseX>155 && mouseX<155+270 && mouseY>350 && mouseY<350+270){ // if 'yes' on question one is pressed
    if(qOne == true){ // if question one is true
      qOne = false;
      qTwo = true;
    }
  }
  if(mouseX>465 && mouseX<465+270 && mouseY>350 && mouseY<350+270 || mouseX>775 && mouseX<775+270 && mouseY>350 && mouseY<350+270){ // if either 'no' on q one is pressed
   if(qOne == true){
      qOne = false;
      qScreen = false;
      qEnd = true;
      endBackQOne = true; //back goes to qOne
   } 
  }
}

function qTwoButtons(){
  if(mouseX>155 && mouseX<155+425 && mouseY>350 && mouseY<350+115){ // if 'undergraduate' on question two is pressed
    if(qTwo == true){ // if question two is true
      backQTwo = false;
      backUndergrad = true;
      qTwo = false;
      qThree = true;
    }
  }
  if(mouseX>620 && mouseX<620+425 && mouseY>350 && mouseY<350+115 || mouseX>155 && mouseX<155+425 && mouseY>505 && mouseY<505+115 || mouseX>620 && mouseX<620+425 && mouseY>505 && mouseY<505+115){ // if 'graduate', 'staff/faculty', 'other' pressed
    if(qTwo == true){
      backUndergrad = false;
      backQTwo = true;
      qTwo = false;
      qFour = true;
    }
  }
}

function qThreeButtons(){
  if(mouseX>155 && mouseX<155+425 && mouseY>350 && mouseY<350+115 || mouseX>620 && mouseX<620+425 && mouseY>350 && mouseY<350+115 || mouseX>155 && mouseX<155+425 && mouseY>505 && mouseY<505+115 || mouseX>620 && mouseX<620+425 && mouseY>505 && mouseY<505+115){
    if(qThree == true){
      qThree = false;
      backUndergrad = true;
      qFour = true;
    }
  }
}

function qFourButtons(){
  if(mouseX>155 && mouseX<155+270 && mouseY>350 && mouseY<350+270 || mouseX>465 && mouseX<465+270 && mouseY>350 && mouseY<350+270 || mouseX>775 && mouseX<775+270 && mouseY>350 && mouseY<350+270){
    if(qFour == true){
      qFour = false;
      qScreen = false;
      qEnd = true;
    }
  }
}

function surveyEndButtons(){
let back = mouseX>325 && mouseX<325+100 && mouseY>630 && mouseY<630+100;  
let retake = mouseX>775 && mouseX<775+100 && mouseY>630 && mouseY<630+100; 
let data = mouseX>325 && mouseX<325+225 && mouseY>140 && mouseY<140+225;
let resources = mouseX>650 && mouseX<650+225 && mouseY>140 && mouseY<140+225;
let form = mouseX>470 && mouseX<470+260 && mouseY>440 && mouseY<440+290; 
  
  if(retake){ // retake pressed
     if(qEnd == true){
       qEnd = false;
       surveyPressed = true;
     }
     }
  if(back){ // back pressed
   if(qEnd == true){
     qEnd = false;
     qScreen = true;
     if(endBackQOne == true){
       qOne = true;
     } else {
       qFour = true;
     }
   } 
  }
  
  if(form){ // form pressed
    if(qEnd == true){
      window.open("https://forms.gle/CMLyaik2YHi74YRq6");
    }
  }
  
  if(data){ // data pressed
    if(qEnd == true){
      qEnd = false;
      dataPressed = true;
      playButton = true;
    } 
  }
  if(resources){ // resources pressed
    if(qEnd == true){
      qEnd = false;
      resourcePressed = true; 
    }
  }
}
