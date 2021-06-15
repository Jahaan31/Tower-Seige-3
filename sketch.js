var myengine, myworld;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var polygon;
var constraint;
var score = 0

const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies 

var hour1

function preload(){
    bgday = loadImage("download.jpg")
    bgnight = loadImage("night.jpg")
}

function setup(){
createCanvas(900,400)

myengine = Engine.create();
myworld = myengine.world;

ground1 = new Ground(400,300,250,10);
ground2 = new Ground(700,200,200,10);

box1 = new Box(300,275);
box2 = new Box(340,275);
box3 = new Box(380,275);
box4 = new Box(420,275);
box5 = new Box(460,275);
box6 = new Box(500,275);

box7 = new Box(320,240);
box8 = new Box(360,240);
box9 = new Box(400,240);
box10 = new Box(440,240);
box11 = new Box(480,240);

box12 = new Box(340,205);
box13 = new Box(380,205);
box14 = new Box(420,205);
box15 = new Box(460,205);

box16 = new Box(380,170);
box17 = new Box(400,170);
box18 = new Box(440,170);
/*
box19 = new Box(390,125);
box20 = new Box(410,125);

box21 = new Box(400,95);
*/
box22 = new Box(780,170);
box23 = new Box(620,170);
box24 = new Box(660,170);
box25 = new Box(700,170);
box26 = new Box(740,170);

box27 = new Box(640,130);
box28 = new Box(680,130);
box29 = new Box(720,130);
box30 = new Box(760,130);

box31 = new Box(660,90);
box32 = new Box(700,90);
box33 = new Box(740,90);

box34 = new Box(680,60);
box35 = new Box(720,60);

box36 = new Box(400,135);

polygon = new Polygon(100,200,50,50);

constraint = new Constraint(polygon.body, {x:100,y:200})

API();

}

function draw(){
background("white");
Engine.update(myengine);

if(hour1){
    console.log("hour:" +hour1) 
        if(hour1>=06 && hour1<=18){
    console.log("day" ) 
            background(bgday)
        }
        else{
    console.log("night" ) 
            background(bgnight)  
        } 
    }


textSize(30)
text("Score:"+score, 50, 50)

ground1.display();
ground2.display();

polygon.display();

fill("pink");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

fill("orange");
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();

fill("white")
box12.display();
box13.display();
box14.display();
box15.display();

fill("lightgrey")
box16.display();
box17.display();
box18.display();

fill("pink")
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();

fill("orange");
box27.display();
box28.display();
box29.display();
box30.display();

fill("white")
box31.display();
box32.display();
box33.display();

fill("lightgrey")
box34.display();
box35.display();

box1.scores();
box2.scores();
box3.scores();
box4.scores();
box5.scores();
box6.scores();

box7.scores();
box8.scores();
box9.scores();
box10.scores();
box11.scores();

box12.scores();
box13.scores();
box14.scores();
box15.scores();

box16.scores();
box17.scores();
box18.scores();

box22.scores();
box23.scores();
box24.scores();
box25.scores();
box26.scores();

box27.scores();
box28.scores();
box29.scores();
box30.scores();

box31.scores();
box32.scores();
box33.scores();

box34.scores();
box35.scores();

constraint.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX, y: mouseY});
}

function mouseReleased(){
    constraint.fly();
}

function keyPressed(){
    if(keyCode===32){
        constraint.attach(polygon.body);
    }
}

async function API(){
    var APIFetch = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var json = await APIFetch.json();
    var dateTime = json.datetime
     hour1 = dateTime.slice(11,13);
    //console.log(hour)
}
