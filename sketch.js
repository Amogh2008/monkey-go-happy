var monkey,monkey_running,surface,back_ground,scene,bananaImage,stoneImage;

var stoneGroup,bananaGroup;

var PLAY = 1;

var END = 0;

var gamestate = PLAY;

var score = 0;

function preload() {
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
back_ground = loadImage("jungle.jpg");
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  
  bananaGroup = createGroup();
  stoneGroup = createGroup();

  
}

function setup() {
createCanvas(400, 400);
  
   text(score,200,200);
  
    scene = createSprite(200,200,20,20);  
  scene.addImage("back", back_ground);
  scene.x = scene.width/2;
  scene.velocityX = -2;

  
 
  
monkey = createSprite(60,340,20,20);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.2;
  
 

  surface = createSprite(200,390,400,20);
  surface.visible = false;
  
 
//create a trex sprite


  
 
  

  
}

function draw() {
background("white");
  
  if(gamestate === PLAY){
     
     
  //console.log(monkey.y);
  
  monkey.collide(surface);
  
  if(scene.x<0){
     scene.x = scene.width/2;
  }
  
  if(keyDown("space")&&monkey.y > 318){
     monkey.velocityY = -20;
     }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  banana();
  stone();
    
    if(monkey.isTouching(bananaGroup)){
       bananaGroup.destroyEach();
      monkey.scale = monkey.scale + 0.01;
      
      
       }
    
    if(monkey.isTouching(stoneGroup)){
      monkey.scale = monkey.scale - 0.01;
       }
    
    
     }
  
 
  
drawSprites();
  
  
}

function banana(){
  
  if(frameCount%200 === 0){
   var  banana = createSprite(400,200,20,20);
     banana.velocityX = -5;
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.y = random(200,300);
    bananaGroup.add(banana);
    
     }
  
  
}


function stone(){
  if(frameCount%150 === 0){
  var stone = createSprite(400,200,20,20);
    stone.velocityX = -10;
    stone.addAnimation("stone" ,stoneImage);
    stone.scale = 0.1;
    stone.y = random(200,300);
    stoneGroup.add(stone);
}
  
}
