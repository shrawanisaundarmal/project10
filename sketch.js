
function preload(){
seaImage=loadImage("sea.png")
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(1000,600);
  sea=createSprite(400,200,10,10)
  sea.addImage(seaImage)
  ship=createSprite(500,400,10,10)
  ship.addAnimation("ship",shipImage)
  ship.scale=0.7
}

function draw() {
  background("blue");
 drawSprites()
}