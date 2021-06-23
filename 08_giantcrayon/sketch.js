function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipse(CENTER);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill("white");
  } else {
    fill("teal");
  }
  ellipse(mouseX, mouseY, 300, 300);
}
