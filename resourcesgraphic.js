
function resourceIcon(){

// creates back two legs
  fill(204, 108, 61);
  stroke(outlineColor);
  strokeWeight(6);
  rect(867.5, 285, 20, 80) // back right leg
  rect(1092.5, 285, 20, 80) // back left leg
  
  for(let y = 365; y <= 595; y+=110){ // color inside shelf back
  noStroke();
  fill(204, 108, 61);
  rect(887.5, y, 205, 70);
  } 

 for(let y = 365; y <= 595; y+=110){ // color inside shelf walls
  noStroke();
  fill(204, 108, 61);
  rect(857.5, y, 30, 70);
  triangle(857.5, y+70, 857.5, y+110, 887.5, y+70);
  rect(1092.5, y, 30, 70);
  triangle(1092.5, y+70, 1122.5, y+70, 1122.5, y+110);
  } 
  
 for(let y = 325; y <= 595; y+=110){ // left lines making up inside shelf
  stroke(outlineColor);
  strokeWeight(6);
  line(887.5, y, 887.5, y+110)
 } 
  
for(let y = 325; y <= 595; y+=110){ // right lines making up inside shelf
  stroke(outlineColor);
  strokeWeight(6);
  line(1092.5, y, 1092.5, y+110)
 } 
  
    
  for(let y = 325; y <= 695; y+=110){ // fills layers
  stroke(outlineColor);
  strokeWeight(6);
  line(887.5, y, 887.5, y+40)
  stroke(237, 128, 76);
  noStroke();
  fill(237, 128, 76);
  triangle(887.5, y, 887.5, y+40, 857.5, y+40)
  rect(887.5, y, 205, 40)
  triangle(1092.5, y, 1122.5, y+40, 1092.5, y+40)
  
// draws layers
  stroke(outlineColor);
  strokeWeight(6);
  line(887.5, y, 1092.5, y);
  line(857.5, y+40, 1122.5, y+40);
  line(887.5, y, 857.5, y+40);
  line(1092.5, y, 1122.5, y+40);
 }

noStroke();
fill(222, 132, 89);
push();
translate(867.5, 285);
rotate(40);
rect(0, 0, 15, 50);
pop();
triangle(867.5, 285, 887.5, 285, 877.5, 295);
  
push();
translate(1092.5, 285);
rotate(320);
rect(0, 0, 15, 50);
pop();
triangle(1122.5+20, 325, 1122.5, 325, 1122.5+10, 310); 
fill(buttonsColor);
rect(1092.5, 285-12, 20, 10);

stroke(outlineColor);
strokeWeight(6);
line(867.5, 285, 887.5, 285);
line(1092.5, 285, 1092.5+20, 285);

// top side lines
line(867.5, 285, 837.5, 325);
line(867.5+20, 285, 837.5+20, 325);  
line(1092.5, 285, 1122.5, 325);
line(1092.5+20, 285, 1122.5+20, 325);

  
  // creates two front legs and title
  resourceTitle();
  fill(222, 132, 89);
  stroke(outlineColor);
  strokeWeight(6);
  rect(837.5, 325, 20, 400, 3, 0, 0, 0) // front left leg
  rect(1122.5, 325, 20, 400, 0, 3, 0, 0) // front right leg
  
    
  for(let y = 325; y <= 695; y+=110){ // fills layers
  stroke(outlineColor);
  strokeWeight(6);
  line(887.5, y, 887.5, y+40)
  stroke(237, 128, 76);
  noStroke();
  fill(237, 128, 76);
  triangle(887.5, y, 887.5, y+40, 857.5, y+40)
  rect(887.5, y, 205, 40)
  triangle(1092.5, y, 1122.5, y+40, 1092.5, y+40)
  
// draws layers
  stroke(outlineColor);
  strokeWeight(6);
  line(887.5, y, 1092.5, y);
  line(857.5, y+40, 1122.5, y+40);
  line(887.5, y, 857.5, y+40);
  line(1092.5, y, 1122.5, y+40);
 }

noStroke();
fill(222, 132, 89)
push();
translate(867.5, 285);
rotate(40);
rect(0, 0, 15, 50);
pop();
triangle(867.5, 285, 887.5, 285, 877.5, 295)

stroke(outlineColor);
strokeWeight(6);
line(867.5, 285, 887.5, 285);
line(867.5, 285, 837.5, 325);
line(867.5+20, 285, 837.5+20, 325);  
line(1092.5, 285, 1122.5, 325);
line(1092.5+20, 285, 1122.5+20, 325);

  
  // creates two front legs and title
  resourceTitle();
  fill(222, 132, 89);
  stroke(outlineColor);
  strokeWeight(6);
  rect(837.5, 325, 20, 400, 3, 0, 0, 0) // front left leg
  rect(1122.5, 325, 20, 400, 0, 3, 0, 0) // front right leg
}

function resourceTitle(){ // creates 'resources' title
fill(219, 201, 162);
stroke(outlineColor);
strokeWeight(7);
textSize(50);
text('RESOURCES', 832, 310);
}

