
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,leftside,rightside;
var ball;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}



function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball)
	ellipseMode(RADIUS)
	Engine.run(engine);

	ground= new Ground(width/2,height,width,20)
	leftside= new Ground(width-50,height-60,20,100)
    rightside= new Ground(width-250,height-60,20,100)


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white")
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
  drawSprites();
  ground.show()
  leftside.show()
  rightside.show()

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60})
	}
}

