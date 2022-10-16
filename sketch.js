var billy;
var P1;
var P2;
var P1img, P2img, billyimg;

function preload(){
  P1img=loadImage("P1.png");
  P2img=loadImage("P2.png");
  billyimg=loadImage("BILLY.png");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


}

function draw() {
  background(255,255,255);  
  drawSprites();
}