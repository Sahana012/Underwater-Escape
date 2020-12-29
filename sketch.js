var water, waterImg;

var girl, girlImg;

var pearl, pearlImg;

var crab, crabImg;

var pearlGroup, crabGroup;

var score = 0;

var gameState = "play";


function preload(){
  waterImg = loadImage("water.png");
  
  girlImg = loadImage("girl.png");
  
  pearlImg = loadImage("pearl.png");
  
  crabImg = loadImage("crab.png");
}


function setup() {
  createCanvas(displayWidth/2, displayHeight/1.5);
  
  water = createSprite(200,200);
  water.addImage(waterImg);
  water.velocityY = 1;
  water.scale = 10;
  
  girl = createSprite(200,300)
  girl.addImage(girlImg)
  girl.scale = 0.5;
  
  pearlGroup = createGroup();
  crabGroup = createGroup();
  
}


function draw() {
  background(110, 221, 255);

if(gameState === "play"){
 
if(water.y>250){
  water.y = 200;
}
  
if(keyDown("left_arrow")){
  girl.x = girl.x - 4;
}
    
if(keyDown("right_arrow")){
  girl.x = girl.x + 4;
}
  
if(keyDown("down_arrow")){
  girl.y = girl.y + 4;
}
  
if(keyDown("up_arrow")){
  girl.y = girl.y - 4;
}
} 
  
if(pearlGroup.isTouching(girl)){
  pearlGroup.destroyEach();
  score = score + 1;
}
  
if(crabGroup.isTouching(girl)){
  gameState = "end";
}
  
if (gameState === "end"){
    pearlGroup.destroyEach();
  girl.destroy();
  crabGroup.destroyEach();
  water.destroy();
  stroke("yellow");
  fill("yellow");
  textSize(50);
  text("Game Over", 200,200)
  }
  
  
  spawnPearl();
  spawnCrab();
  
  drawSprites();  
  
  stroke("white")
  fill("white")
  textSize(50)
  text("Score : " + score, 45,50)
}

function spawnPearl (){
if(frameCount % 150 === 0){
  pearl = createSprite(Math.round(random(100,300)),Math.round(random(100,200)))
  pearl.addImage(pearlImg)
  pearl.scale = 0.1
  pearl.lifetime = 300;
  
  pearlGroup.add(pearl);
}
}

function spawnCrab (){
if(frameCount % 300 === 0){
  crab = createSprite(Math.round(random(100,300)),Math.round(random(100,200)))
  crab.addImage(crabImg)
  crab.scale = 0.1
  crab.lifetime = 300;
  
  crabGroup.add(crab);
}
}


