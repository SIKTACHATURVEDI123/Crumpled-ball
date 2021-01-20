
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1 , Ground , dustbin ;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 Paper1= new Paper(300 , 650 ,10 , 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paper1.display();
  drawSprites();
 
}



