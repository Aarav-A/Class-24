const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird;
var log1, log2, log3, log4;
var ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,580,60);
    box2 = new Box(850,580,60);
    box3 = new Box(1100,490,60);
    box4 = new Box(850,490,60);
    box5 = new Box(975,400,60);
    pig1 = new Pig(975,580,50);
    pig2 = new Pig(975,490,50);
    bird = new Bird(400,580,50)
    log1 = new Log(975,500,300,PI/2);
    log2 = new Log(975,410,300,PI/2);
    log3 = new Log(1050,400,130,-PI/7);
    log4 = new Log(900,400,130,PI/7);
    ground = new Ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    ground.display();
   
}