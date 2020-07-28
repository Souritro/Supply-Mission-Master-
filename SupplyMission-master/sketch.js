
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Render = Matter.Render;
var helicopterimg, helicopterSprite,  packageimg
var packageBody, ground,  box1,world,engine;

//var testvar=1;


function preload()
{
	helicopterimg=loadImage("helicopter.png")
	packageimg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage("helicopterimg123",helicopterimg)
	helicopterSprite.scale=0.6
	box1=new Package(400,200,20,20);
	//boxSprite=createSprite(box1.x,box1.y,20,20);
	//boxSprite()

	

	


	//engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground= new Ground(400,350,800,10)
 	//World.add(world, ground);


	Engine.run(engine);  
}


function draw() {
	Engine.update(engine);
  	//rectMode(CENTER);
	  background(0);
	  //rectMode(CENTER);
 	// packageSprite.x= packageBody.position.x 
	 // packageSprite.y= packageBody.position.y 
	 //rect(ground.position.x,ground.position.y,800,7)
	 //boxSprite.x=box1.position.x;
	 //boxSprite.y=box1.position.y;
	 box1.display()
	 ground.display()
  	//console.log("Before drawSprites()");
  	drawSprites();
  	//console.log("After drawSprites()");
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//while(testvar>0){
		box1.downarrowlaunch()
	}
    
  }
