var bg,bgImg1,bgImg2,bgImg3;
var queen,queenImg;
var seahorse,seahse1,seahse2,seahse3,octo,octoImg,sword,swordImg;
var diamond,ddImg,gem,gemImg,jwel,jwelImg ;
var edges , rewGroup , obsGroup ;
var score = 0 ;
var life , life1 , life2 , life3 , obsCollisionCounter;


function preload(){
  
 
 bgImg3 = loadImage("/assets/sea1.jpg");

 queenImg = loadImage("/assets/seaquen-removebg-preview.png");

 seahse1 = loadImage("/assets/seaHorse.png");
 

 octoImg = loadImage("/assets/evilOcto.png");
 swordImg = loadImage("/assets/sword.png");

 ddImg = loadImage("/assets/diamonds.png");
 gemImg = loadImage("/assets/gem.png");
 jwelImg = loadImage("/assets/jwell.png");

 life1 = loadAnimation("/assets/heart_1.png");
 life2 = loadAnimation("/assets/heart_2.png");
 life3 = loadAnimation("/assets/heart_3.png");

}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(width/2,height/2,width,height);
  bg.addImage('sea',bgImg3);
  bg.scale = 2.5;
  bg.velocityX = -3;

  queen = createSprite(width-1454,height/2);
  queen.addImage('princess',queenImg);
  queen.scale = 0.45;

  obsGroup = new Group();
  rewGroup = new Group();

  life = createSprite(300,90);
  life.addAnimation("1",life1);
  life.addAnimation("2",life2);
  life.addAnimation("3",life3);
  life.changeAnimation("3",life3);

  life.scale = 0.47;
  

  edges = createEdgeSprites();
  


}

function draw() {
  background(0); 

 if(bg.x < 720){
    bg.x = width/2
 };

 if(keyDown(UP_ARROW)){
    queen.y = queen.y-6
 }

 if(keyDown(DOWN_ARROW)){
   queen.y += 6
 }

 spawnObstacle();
 spawnReward ();

 if(rewGroup.collide(queen)){
   score += 10
   rewGroup.destroyEach();
 };

 if(obsGroup.collide(queen)){
   obsCollisionCounter++
   obsGroup.destroyEach();
 }

 if(obsCollisionCounter===2){
   life.changeAnimation("2");
 }

 queen.bounceOff(edges);

 console.log(bg.x)
drawSprites();

textSize(40);
fill("white");
text("Treasure : " + score , width-350 , 100);


}

function spawnObstacle (){
  
  if(frameCount%200 === 0){
    var obs = createSprite(width,random(50,height-100))
    obs.velocityX = -10 ;

    obs.lifetime = width/10;
    obsGroup.add(obs);
    
    rand = Math.round(random(1,3));
    switch(rand){
      case 1 : obs.addImage(seahse1);
      obs.scale = 0.59
        break
      case 2 : obs.addImage(octoImg);
      obs.scale = 0.35
        break
      case 3 : obs.addImage(swordImg);
      obs.scale = 0.28
        break
      default: break
    }
  }
}

function spawnReward (){

  if(frameCount%150 === 0){
    var rew = createSprite(width,random(50,height-100))
    rew.velocityX = -10 ;

    rew.lifetime = width/10;
    rewGroup.add(rew);

    rando = Math.round(random(1,3));
    switch(rando){
      case 1 : rew.addImage(ddImg);
      rew.scale = 0.09
        break
      case 2 : rew.addImage(gemImg);
      rew.scale = 0.35
        break
      case 3 : rew.addImage(jwelImg);
      rew.scale = 0.28
        break
      default: break
    }
  }
}
