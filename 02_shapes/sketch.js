
// Example 1-1: stroke and fill

function setup() {
    createCanvas(480, 270);
    strokeWeight(5)
    stroke('orange'); 
    noFill()

    
  }
  
  function draw() {
    background(255);
    rect(150,50,75,100);
    ellipse(60,100,100,100);
    triangle(240, 150, 300, 60, 360, 150);
    
  }
