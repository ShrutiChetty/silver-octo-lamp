const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground =new Ground(400,390,800,20);
  right = new Ground(790,200,20,800);
  left = new Ground(10,200,20,800);
  top_wall = new Ground(400,10,800,20);
  leftSide = new Ground(575,320,20,120);
  rightSide = new Ground(700,320,20,120);

  var ball_options = {
    restitution: 0.95
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:-0.05});
  }
}