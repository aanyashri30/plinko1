const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;

function setup() {
  createCanvas(480,600);
  //createSprite(400, 200, 50, 50);

  c1 = new Circle(90,100,20);
}

function draw() {
  background(255,255,25);  

c1.display();
}