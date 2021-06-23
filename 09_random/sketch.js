const colors = ["red", "orange", "purple", "teal", "grey"];
let color;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  color = random(colors);
  size = random(50, 300) 
}

function draw() {
  noStroke();

  if (mouseIsPressed) {
    fill("white");
  } else {
    fill(color);
  }
  ellipse(mouseX, mouseY, size, size);
}
