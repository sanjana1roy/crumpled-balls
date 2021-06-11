const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var dustBinLeft, dustBinRight, dustBinBase;

var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, height- 40, 800, 10);

	dustBinBase = new DustBinBase(600, 650, 200, 10);
	dustBinLeft = new DustBinSide(500, 600, 10, 100);
	dustBinRight = new DustBinSide(700, 600, 10, 100);

	paper = new Paper(100, 100, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  dustBinBase.display();
  dustBinLeft.display();
  dustBinRight.display();

  paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:45, y:-45});
	}
}



