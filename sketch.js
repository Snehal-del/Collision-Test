var sprite1;
var sprite2;

function setup() {
  createCanvas(800,400);
  
  sprite1 = createSprite(400, 200, 50, 50);
  sprite1.shapeColor = "green";
  
  sprite2 = createSprite(400, 300, 50, 50);
  sprite2.shapeColor = "green"; 
}

function draw() {
  background(255,255,255);

  sprite2.x = World.mouseX;
  sprite2.y = World.mouseY;
  
  console.log(sprite2.x - sprite1.x);
  
  if(isTouching()) {
    
    console.log(isTouching());

    sprite1.shapeColor = "orange";
    sprite2.shapeColor = "orange"; 
  } else {

    console.log(isTouching());

    sprite2.shapeColor = "green";
    sprite1.shapeColor = "green";
  }

  drawSprites();
}

function isTouching() {

  if(sprite2.x - sprite1.x <= sprite1.width/2 + sprite2.width/2 && sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2
    && sprite2.y - sprite1.y <= sprite1.width/2 + sprite2.width/2 && sprite1.y - sprite2.y < sprite1.width/2 + sprite2.width/2) {
    
   return true;

    } else {
     
   return false;

    }


}