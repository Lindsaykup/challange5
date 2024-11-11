let d = 60;
let deg = 58;
let outline = true;

let diameterSlider, degSlider, outlineCheckbox;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  // Create sliders and checkbox with p5.js
  diameterSlider = createSlider(10, 200, 100);
  diameterSlider.position(20, 20);
  diameterSlider.style('width', '150px');

  degSlider = createSlider(0, 180, 23);
  degSlider.position(20, 50);
  degSlider.style('width', '150px');

  outlineCheckbox = createCheckbox("Outline", true);
  outlineCheckbox.position(20, 80);
}

function draw() {
  background(125);

  // Set outline based on checkbox
  if (outlineCheckbox.checked()) {
    stroke("black");
  } else {
    noStroke();
  }

  // Draw circle using diameter from slider
  circle(100, 200, diameterSlider.value());

  // Draw rotated rectangle using angle from slider
  push();
  translate(200, 200);
  rotate(radians(degSlider.value()));
  rect(0, 0, 60, 60);
  pop();

  // Display text for slider label and value
  noStroke();
  fill(0);
  text(`Diameter: ${diameterSlider.value()}`, 180, 30);
  text(`Rotation: ${degSlider.value()}`, 180, 60);
}








































