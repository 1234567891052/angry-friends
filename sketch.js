const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var log, tag;
var projectile, trebuchet;
var ground,platform;


function setup(){
    var canvas = createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

    platform=new Ground(200,800,50,150);
    ground = new Ground(600,height,1200,20);
   
    tag = new Tag(600,130,50,80);
    tag1 = new Tag(740,130,50,80);

    log1 = new Log(600,200,70,70);
    log2 = new Log(600,270,70,70);
    log8 =  new Log(600,340,70,70);
  
    log14=  new Log(530,421,70,70);
    log15= new Log(530,421,70,70);
    log16= new Log(530,421,70,70);
    log17= new Log(530,421,70,70);

    log4 = new Log(740,200,70,70);
    log5= new Log(740,270,70,70);
    log6 = new Log(740,340,70,70);
    log18 = new Log(810,421,70,70);
    log19 = new Log(810,421,70,70);
    log20 = new Log(810,421,70,70);
    log21 = new Log(810,421,70,70);

    log9 = new Log(670,200,70,70);
    log10 = new Log(670,340,70,70);


    projectile = new Projectile(200,50);
    trebuchet= new Trebuchet(projectile.body,{x:200, y:650});

}

function draw(){

    background("black");
    Engine.update(engine);

    platform.display();
    ground.display();

    tag.display();
    tag1.display();

    log1.display();
    log2.display();
 
    log4.display();
    log5.display();
    log6.display();
 
    log8.display();
    log9 .display();
    log10 .display();
 
    log14.display();
    log15.display();
    log16.display();
    log17.display();
    log18.display();
    log19.display();
    log20.display();
    log21.display();

    projectile.display();

    trebuchet.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    trebuchet.fly();
}