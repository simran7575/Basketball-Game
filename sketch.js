

function preload() {
 backgroungImg = loadImage("assets/background.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  login =  new Form();
}

function draw() {
  background(backgroungImg);
login.display()
}

