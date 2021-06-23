//code snippet adapted from https://editor.p5js.org/juliamaltz/sketches/H1sO_VBSb
// var color1;
// var color2;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   color1 = color(255, 0, 0);
//   color2 = color(0, 0, 255);
// }

// function draw() {
//   var percentage = map(mouseX, 0, width, 0, 1);
//   var color = lerpColor(color1, color2, percentage);
//   stroke(250);
//   fill(color);
//   ellipse(mouseX, mouseY, 50,50);
// }


let img;
function preload() {
  img = loadImage('banana.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  noStroke();
  // if (mouseIsPressed) {
  //   fill("white");
  // } else {
  //   fill("teal");
  // }
 image(img, mouseX, mouseY, 100, 100);
  // ellipse(mouseX, mouseY, 300, 300);
}
