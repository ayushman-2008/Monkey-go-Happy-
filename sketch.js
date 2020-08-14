var monkey_image,monkey;
var stone_,stone_image;
var ground;
var banana_image,bananagroup;
var stone_image,stonegroup;
var jungle     ,background_image;
var count=0;

function preload(){

bananagroup=new Group();
stonegroup=new Group();
  
banana_image=loadImage("banana.png");
  
stone_image=loadImage("stone.png");
  
background_image=loadImage("jungle.png");

monkey_image=loadAnimation("Monkey_01.png","Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}


function setup() {
  createCanvas(400, 400);
 jungle =createSprite(200,200,400,400);
  jungle.addImage("background",background_image);
  
  monkey=createSprite(60,290,40,40);
  monkey.addAnimation("monkey",monkey_image);
  monkey.scale=0.1;
  
  ground=createSprite(200,310,400,5);
  ground.visible=false;
  
  
}

function draw() {

  background("white");
  
  count = count + Math.round(getFrameRate()/60);
  fill("red");
  text("score="+count,200,30);
  
  monkey.collide(ground);
  
  spawnbanana ();
  spawnstones();
   
  if(keyDown("space")&&monkey.y>=200){
  monkey.velocityY=-18;
  }
  
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  
if(bananagroup.isTouching(monkey)){
 monkey.scale=monkey.scale+0.001
  bananagroup.destroyEach();
}
  if(stonegroup.isTouching(monkey)){
 monkey.scale=monkey.scale-0.001 

}
  
  
 
  
  drawSprites();
}

function spawnbanana (){
  if(frameCount%50===0){
  var banana=createSprite(400,180,40,40);
     banana.addAnimation("Banana",banana_image);
     banana.velocityX=-8;
     banana.lifetime=50;
     banana.scale=0.05;
     bananagroup.add(banana);
  }
}

 function spawnstones(){
   if(World.frameCount%100===0){
     var stone=createSprite(400,290,40,40);
     stone.addAnimation("Stone",stone_image);
     stone.velocityX=-8;
     stone.lifetime=50;
     stone.scale=0.2;
     stone.collide(ground);
     stonegroup.add(stone);
   }
 }