
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper = new PAPER(50,530,20);
	
	db1 = new DUSTBIN (600,500,10,80);
	db2 = new DUSTBIN (680,500,10,80);
	db3 = new DUSTBIN (640,540,80,10);
	
	tableTop = new TABLE(400,550,750,10);
	tbl1= new TABLE(100,625,10,150);
	tbl2= new TABLE(150,600,10,100);
	tbl3= new TABLE(650,625,10,150);
	tbl4= new TABLE(600,600,10,100);
}


function draw() {
  rectMode(CENTER);
  background(183,180,181);
  
  tableTop.display();
  tbl1.display();
  tbl2.display();
  tbl3.display();
  tbl4.display();

	paper.display();

	db1.display();
	db2.display();
	db3.display();

	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position,{x:65,y:-65})
	}
}


