const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var balls = [];
var plinkos = [];
var divisions = [];

var ball;
var divisionHeight=300;
var score = 0;
var count = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
 
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(30)
  text("Score : "+score,20,30);
  fill("white");

  textSize(35);
  text("500",3,550);
  text("500",90,550);
  text("500",170,550);
  text("500",250,550);
  text("100",330,550);
  text("100",410,550);
  text("100",490,550);
  text("200",570,550);
  text("200",650,550);
  text("200",730,550);
 
  
  Engine.update(engine);
  ground.display();

  if(gameState =="end"){
    textSize(100);
    text("GAME OVER",150,250);
  }
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
  //  particle.push(new particle(random(width/2-30, width/2+30), 10,10));
  //  score++;
  // }
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }


   if(ball!=null){
     ball.display();

     if(ball.body.position.y > 750){
       if(ball.body.position.x < 250){
         score = score+500;
         ball = null;
         if(count >= 5){
           gameState = "end";
         }
       }
       else if(ball.body.position.x > 251 && ball.body.position.x < 490){
         score = score+100;
         ball = null;
         if(count >= 5){
          gameState = "end";
        }

       }
       else if(ball.body.position.x > 491 && ball.body.position.x < 730){
        score = score+200;
        ball = null;
        if(count >= 5){
          gameState = "end";
        }
      }
     }
    
   }
  
}
function mousePressed(){
  if(gameState !== "end"){
    count++;
    ball = new Ball(mouseX,10,10,10);
  }
}