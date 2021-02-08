const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = []

var engine, world;

var ground, boy;


function preload(){
    boyImage=loadAnimation("images/walking_8.png","images/walking_7.png","images/walking_6.png","images/walking_5.png","images/walking_4.png","images/walking_3.png","images/walking_2.png","images/walking_1.png")
    light1=loadImage("images/1.png")
    light2=loadImage("images/2.png")
    light3=loadImage("images/3.png")
    light4=loadImage("images/4.png")
}

function setup(){
    createCanvas(600,650)

    engine=Engine.create();
    world = engine.world;

    ground = new Ground(300,650,600,10)
  
    boy=createSprite(300,480,2,2)
    boy.addAnimation("batman",boyImage)
    boy.scale=0.5;
}

function draw(){
    background(0)
    Engine.update(engine)
    if(frameCount % 20 === 0){
        var px = Math.round(random(50,750))
        var rain = new Drops(px, 0, 5)
        drops.push(rain)
    }
    for(var i = 0; i < drops.length; i++){
        drops[i].display()
    }
    ground.display()

    thunder()
    drawSprites()
}   

function thunder(){
    if(frameCount % 60 === 0) {
        var lightening = createSprite(600,165,10,40);
        lightening.x=Math.round(random(100,500))
        lightening.scale=0.5;
        lightening.lifetime=50;
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: lightening.addImage(light1);
                  break;
          case 2: lightening.addImage(light2);
                  break;
          case 3:lightening.addImage(light3);
                  break;
          case 4:lightening.addImage(light4);
                  break;
          default: break;
        }
    }
}