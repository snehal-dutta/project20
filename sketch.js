var car, wall
var speed, weight, deformation

function setup() {
 createCanvas(1600,400);

 speed = random(55, 90);
 weight = random(400, 1500);

 wall = createSprite(1000, 200, 60, height/2);
 wall.shapeColor = "black";
 
 car = createSprite(50, 200, 50, 50);
 car.velocityX = speed;
 car.shapeColor = "white";
}

function draw() {
  background(180);
  
  if(wall.x - car.x < wall.width/2 + car.width/2) {
    car.velocityX = 0;
    deformation = 0.5 * weight * speed * speed / 22509;

  if(deformation > 180) {
    car.shapeColor = "red";
  }
  if(deformation < 180 && deformation > 100) {
    car.shapeColor = "yellow";
  }
  if(deformation < 100) {
    car.shapeColor = "green";
  }
  }
drawSprites();
}