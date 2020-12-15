var fixed,moving;

function setup() {
  createCanvas(1200,600);
  fixed=createSprite(600, 300, 50, 80);
  fixed.shapeColor="green";
  fixed.debug=true;

  moving=createSprite(400,200,80,30);
  moving.shapeColor="green";
  moving.debug=true;


}

function draw() {
  background(0);  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if(moving.x-fixed.x<=moving.width/2+fixed.width/2 && 
    fixed.x-moving.x<=moving.width/2+fixed.width/2 &&
    moving.y-fixed.y<=moving.height/2+fixed.height/2 &&
    fixed.y-moving.y<=moving.height/2+fixed.height/2
    ){
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
   else{
     fixed.shapeColor="green";
     moving.shapeColor="green";
   }
  drawSprites();
}