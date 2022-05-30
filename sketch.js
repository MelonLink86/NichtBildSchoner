let x;
let y;
let xspeed;
let yspeed;
let img;
let r, g, b;



function preload() {
  img = loadImage('img.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 10;
  yspeed = 10;
  pickColor();
  frameRate(60);
}

function pickColor() {
  r = random(256);
  g = random(256);
  b = random(256);
}

function draw() {
  colorMode(HSB, 100);
  background(frameCount*0.5%100, 100, 100);
  fill(frameCount*5%100, 100, 100);
  textSize(256);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Wieso das ganze?', windowWidth/2 , windowHeight/2-350);
  text('Keine Ahnung Digga', windowWidth/2 , windowHeight/2);
  text('Deine Mutter!', windowWidth/2 , windowHeight/2+350);

  colorMode(RGB, 255);
  tint(r, g, b);
  image(img, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + img.width >= width) {
    xspeed = -xspeed;
    x = width - img.width;
    pickColor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickColor();
  }

  if (y + img.height >= height) {
    yspeed = -yspeed;
    y = height - img.height;
    pickColor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickColor();
  }
}