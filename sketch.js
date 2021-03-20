var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(900, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	fairy.debug=false;
	fairy.setCollider("rectangle",10,10,1050,1000);
}


function draw() {
  background(bgImg);

  edges=createEdgeSprites();
  keyPressed();
  drawSprites();
//   if(star.isTouching("fairy")){
// 	  star.velocityY=0;
// 	  star.x=fairy.x;

//   }

  fairy.collide(edges);
}

function keyPressed() {
	//write code here
if(keyDown("left")){
fairy.x = fairy.x-5;
}
if(keyDown("right")){
	fairy.x = fairy.x+5;
	}
if(keyWentDown("down")){
	star = createSprite(random(50,800),30);
	star.addImage(starImg);
	star.scale = 0.2;
	star.velocityY=+5;
	star.setlifetime=100;
}

}
