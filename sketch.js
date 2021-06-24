var bg,rocket,rocketImg;
var rocket1Img,rocket2Img,rocket3Img,rocket4Img;
var iss,spacecraft,hasDocked;


function preload(){
  bg=loadImage("spacebg.jpg");
  rocketImg=loadImage("iss.png");
  rocket1Img=loadImage("spacecraft1.png");
  rocket2Img=loadImage("spacecraft2.png");
  rocket3Img=loadImage("spacecraft3.png");
  rocket4Img=loadImage("spacecraft4.png");
  }

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(rocketImg);

  hasDocked=createSprite(500,200,50,50);
  hasDocked.addImage(rocket2Img);
  hasDocked.scale=0.2;

  
}



function draw() {
  background(bg);
  
  if(keyDown(LEFT_ARROW)){
    hasDocked.x=hasDocked.x-3;
    hasDocked.addImage(rocket3Img);
  }

  if(keyDown(RIGHT_ARROW)){
    hasDocked.x=hasDocked.x+3;
    hasDocked.addImage(rocket4Img);
  }

  if(keyDown(UP_ARROW)){
    hasDocked.y=hasDocked.y-3;
    hasDocked.addImage(rocket2Img);
  }

  if(keyDown(DOWN_ARROW)){
    hasDocked.y=hasDocked.y+3;
    hasDocked.addImage(rocket2Img);
  }

  

  drawSprites();
}