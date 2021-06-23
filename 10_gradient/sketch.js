//code snippet adapted from https://editor.p5js.org/juliamaltz/sketches/H1sO_VBSb
let color1;
let color2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  color1 = color(255, 0, 0);
  color2 = color(0, 0, 255);
}

function draw() {
  let percentage = map(mouseY, 0, height, 0, 1);
  let color = lerpColor(color1, color2, percentage);
  noStroke();
  fill(color);
  ellipse(mouseX, mouseY, 75, 75);
}
