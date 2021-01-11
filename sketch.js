const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1;

var log1,log2,log3,log4;
var box3,box4,box5,box6,box2;
var box7,box8,box9,box10,box11,box12;
var ball1,rope1;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);

    ball1 = new Ball(600,200,80)

    rope1 = new Rope(ball1.body,{x:500,y:50})

    ground = new Ground(600,600,1200,20)

}

function draw(){
    background(0);
    Engine.update(engine);
   // console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
   // console.log(box2.body.angle);
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
    ball1.display();
    rope1.display();
    ground.display();
}
function mouseDragged() { Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY }); }