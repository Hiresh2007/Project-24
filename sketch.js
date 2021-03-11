
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var egine,world;

var stone;
var rubber;
var iron;


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	var rubber_options ={
		restitution:1.3,
		friction: 5,
		desity: 1,
	}

	rubber = Bodies.circle(400,300,20,rubber_options);
	stone = new Stone(600,300,50,50);
	iron = new Iron(400,300,70,70)
	ground = new Ground(600,height,1200,20);


	Engine.run(engine);
	World.add(world,rubber)
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ellipseMode(RADIUS)
  ellipse(rubber.position.x,rubber.position.y,10,10)

  
  
  drawSprites();
  ground.display();
  iron.display();
  stone.display();
 
}



