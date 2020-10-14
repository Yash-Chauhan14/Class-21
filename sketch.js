var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(100,200,50,80);

  fixedRect.debug = true;
  movingRect.debug = true;

  movingRect.velocityX = 6;
}



function draw() {
  background(255,255,255);  

  console.log(movingRect.x-fixedRect.x);

  bounceOff(movingRect,fixedRect);

  drawSprites();

  }

  