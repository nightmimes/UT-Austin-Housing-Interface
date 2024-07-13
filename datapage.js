function centerDataPage(){ // center background rect
  stroke(outlineColor);
  strokeWeight(6);
  fill(buttonsColor);
  rect(125, buttonY-rMoveY, pageWidth+incPage, pageHeight, buttonRadius);
}

function dataPageTitle() { // creates 'data' title
  if(dataPressed == true){
  fill(219, 201, 162);
  stroke(outlineColor);
  strokeWeight(8);
  textSize(75);
  text('DATA', 505, 90);
  }
}

function towerAnimation() {
    // controls tower animation speeds
  rX += speed2;
  triA += speed2;
  triB += speed2;

  sTopX -= speed2;
  sMainX -= speed2;
  roofX -= speed2;
  bottomX -= speed2;
  baseX -= speed2;
  
    if (sTopX <= 435 && rX >= 690) { // if reaching designated position
    stopAnimateTower(); // function to stop animation
    displayData = true; // display data is true
  }
}
function resetTowerPositions() {
  rX = originalRX;
  sTopX = originalSTopX;
  sMainX = originalSMainX;
  roofX = originalRoofX;
  bottomX = originalBottomX;
  baseX = originalBaseX;
  triA = originalTriA;
  triB = originalTriB;
}

function displayTower() {
  if(playButton == true || animateTower == true){
  noStroke();

  // sets colors of tower based on conditions
  
  fill(207, 149, 114);
  rect(rX, 150, 75, 21.28378378378378); // shape r top
  rect(sTopX, 150, sTopW, 42.6086956521739); // shape s top
  rect(rX, 171.28378378378378, 75, 63.71621621621622); // shape r top
  rect(rX, 235, 100, 2.5); // shape r main
  rect(sTopX, 192.6086956521739, sTopW, 42.3913043478261); // shape s top
  rect(sMainX, 235, sMainW, 64.1304347826087); // shape s main
  rect(rX, 237.5, 100, 272.5); // shape r main
  rect(rX, 510, 120, 25); // shape r roof
  triangle(triA, 510, triA, 535, triB, 535); // shape r roof tri
  rect(rX, 535, 130, 35); // shape r bottom
  rect(rX, 570, 155, 70); // shape r base
  rect(sMainX, 299.1304347826087, sMainW, 210.8695652173913); // shape s main
  rect(roofX, 510, roofW, 25); // shape s roof
  triangle(roofX, 510, roofX, 535, baseX, 535); // shape s roof triangle
  rect(bottomX, 535, bottomW, 35); // shape s bottom
  rect(baseX, 570, baseW, 70); // shape s base
  }
}

function showPlayButton() {
  let playH = mouseX > 550 && mouseX < 550 + 100 && mouseY > 360 && mouseY < 360 + 100;
  let buttonsA = color(214, 96, 36);
  let buttonsB = color(214, 96, 36, 200);
  let outlineB = color(168, 74, 50, 200);
  let outlineA = color(168, 74, 50);
  let interpColorO = lerpColor(outlineB, outlineA, (sin(angle)+1)/2);
  let interpColorB = lerpColor(buttonsB, buttonsA, (sin(angle)+1)/2);
  
  if (growth) { // controls animation speed of play button
    playD += speed1;
  } else {
    playD -= speed1;
  }

  if (playD > 105 || playD <= 95) { // creates growth and shrink animation
    growth = !growth;
  }
  
  
  if(playH){
  stroke(interpColorB)
  } else {
  stroke(interpColorO)
  }
  fill(bgColor);
  strokeWeight(12);
  ellipse(600, 410, playD, playD); // ellipse making up play button circle

  if(playH){
   fill(buttonsColor);
  } else {
   fill(outlineColor); 
  } 
  noStroke();
  triangle(580, 380, 580, 440, 630, 410); // play button icon
  
  angle += speed3;
}

function stopAnimateTower() {
  animateTower = false; // stops the tower animation
}

function readData() { // reads csv data
  for (let i = 0; i < table.getRowCount(); i++) { // get numbers in csv rows
    let row = table.getRow(i);
    researchPercentages.push(row.getNum('research'));
    surveyPercentages.push(row.getNum('survey'));
  }
}

function dataPage(){
  dataPageTitle();
  centerDataPage();
  backButton();
  
  if(playButton == true){
    displayTower();
    showPlayButton();
  }
  if(animateTower == true) { // if animate tower is true
    displayTower(); // displays tower shapes and colors
    towerAnimation(); // display tower animation controls
  }
  if(displayData == true){
    dataViz();  
    }  
}

function dataViz(){
let moveTower = 90;
dataLabels();
researchData();
researchTower();
surveyTower();
surveyData();
}

function dataLabels(){
noStroke();

fill(c1);
textSize(20);
text('UHD Dormitories', 524, 170);
  
fill(c2);  
textSize(20);
text('Other', 575, 250);
textSize(22);
text('UHD Housing', 532, 272);
  
fill(c2);  
textSize(28);
text('Off-Campus', 525, 350);
textSize(18);
text('(non-UHD)', 555, 370);
} 

function disclaimer(){
  textSize(15);
  noStroke();
  fill(outlineColor);
  text("survey data last updated: 7/12/2024", 271, 660);
}