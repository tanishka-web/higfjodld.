var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(23,200);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor=80,80,80;
  bullet.velocityX=speed;
  
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=80,80,80;
}

function draw() {
  background(0);
  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  

    if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
     
    
     if(damage>10){
       wall.shapeColor=color(255,0,0)
     }
    
    
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
}











    








  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}

return false
}