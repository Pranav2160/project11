
var ship, ship_sailing, edges;
var ocean, oceanImage;

function preload(){
  ship_sailing = loadAnimation("ship1-.png","ship-2.png","ship-3.png","ship-4.png");
  oceanImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  // creating ship
  ship = createSprite(50,160,20,50);
  ship.addAnimation("sailing",ship_sailing);
  ocean = createSprite(300,160,400,200)
  ocean.addImage("ground", oceanImage);
  edges = createEdgeSprites();
  
  //adding scale and position to ship
  trex.scale = 0.5;
  trex.x = 50
}
function draw(){
  //set background color 
  background("white");
  ship.collide(ocean);
  drawSprites();
}