const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
var engine,world
var ball,rope,ground;
var cranes,crane;
var gameState="play";

var bakground1;
function preload(){
  
  background1=loadImage("GamingBackground.png")
}
function setup() {
  createCanvas(1200,590);
  engine=Engine.create();
  world= engine.world;


 hero=new Hero(300,258);
 rope=new Rope(hero.body,{x:300,y:258});
Ground=Bodies.rectangle(600,580,1200,20,{isStatic:true})
World.add(world,Ground);

box1=new Box(840,185);
box2=new Box(840,255);
box3=new Box(840,325);
box4=new Box(840,395);
box5=new Box(840,465);
box6=new Box(840,535);
box7=new Box(770,185);
box8=new Box(770,255);
box9=new Box(770,325);
box10=new Box(770,395);
box11=new Box(770,465);
box12=new Box(770,535);
box13=new Box(840,100);
box14=new Box(700,100);
box15=new Box(700,185);
box16=new Box(700,255);
box17=new Box(700,325);
box18=new Box(700,395);
box19=new Box(700,465);
box20=new Box(700,535);
monster=new Monster(770,100);


}

function draw() {
  background(background1); 
  Engine.update(engine);
  rectMode(CENTER)
  rect(600,580,1200,20);
  
 

  hero.display();
  rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
 box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  monster.display();
  stroke ("black");
  strokeWeight (10)
  fill ("yellow")
  textSize(24);

  drawSprites();
 
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}