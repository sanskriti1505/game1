var player, playerImg1, playerImg2, playerImg3, playerImg4;
var monster, monsterImg;
var portal1,portal2,portal3,portal4, portalImg;
var hurdle1, hurdle2;
var hurdle1Img, hurdle2Img;
var bar1,bar2,bar3,bar4,bar5,bar6,bar7,bar8,bar9,bar10,bar11,bar12,bar13,bar14,bar15,bar16,bar17;
var bar18, bar19, bar20, bar22,bar23,bar24,bar25,bar26;
var edges;


function preload(){
  portalImg=loadImage("portal.png")

}
function setup(){
  createCanvas(1000,800)
  bar1=createSprite(164,65,10,150);
  bar1.shapeColor="red";
  bar2=createSprite(900,165,10,150);
  bar2.shapeColor="blue";
  bar3=createSprite(500,80,10,150);
  bar3.shapeColor="green";
  bar4=createSprite(594,365,10,150);
  bar4.shapeColor="yellow";
  bar5=createSprite(600,865,10,150);
  bar5.shapeColor="red";
  bar6=createSprite(950,650,10,200)
  bar6.shapeColor="blue";
  bar7=createSprite(550,100,10,200)
  bar7.shapeColor="green";
  bar8=createSprite(700,650,10,140)
  bar8.shapeColor="yellow";
  bar9=createSprite(350,500,10,150)
  bar9.shapeColor="red";
  bar10=createSprite(350,900,10,150)
  bar10.shapeColor="blue";
  bar11=createSprite(480,950,10,190)
  bar11.shapeColor="green";
  bar12=createSprite(164,605,10,250)
  bar12.shapeColor="yellow";
  bar13=createSprite(300,690,10,150)
  bar13.shapeColor="red";
  //horizontal 
  bar14=createSprite(205,605,100,10);
  bar14.shapeColor="blue";
  bar15=createSprite(305,165,150,10);
  bar15.shapeColor="green";
  bar16=createSprite(404,265,200,10);
  bar16.shapeColor="yellow";
  bar17=createSprite(904,365,180,10);
  bar17.shapeColor="red";
  bar18=createSprite(104,565,210,10);
  bar18.shapeColor="green";
  bar19=createSprite(504,65,110,10);
  bar19.shapeColor="blue";
  bar20=createSprite(894,605,150,10);
  bar20.shapeColor="yellow";
  bar22=createSprite(674,700,120,10);
  bar22.shapeColor="red";
  bar23=createSprite(794,780,160,10);
  bar23.shapeColor="blue";
  bar24=createSprite(864,95,310,10);
  bar24.shapeColor="green";
  bar25=createSprite(464,655,110,10);
  bar25.shapeColor="yellow";
  bar26=createSprite(164,658,110,10);
  bar26.shapeColor="red";
  bar27=createSprite(0,358,110,10);
  bar27.shapeColor="blue";
  bar28=createSprite(0,168,110,10);
  bar28.shapeColor="green";
  portal1=createSprite(253,459,50,50)
 // portal1.addImage(portalImg)
  portal1.velocityX=2
  portal2= createSprite(371,86,50,50)
  //portal2.addImage(portalImg);
  portal2.velocityY=2
  portal3=createSprite(628,169,50,50)
  //portal3.addImage(portalImg);
  portal3.velocityX=2
  portal4= createSprite(610,416,50,50)
  //portal4.addImage(portalImg);
  portal4.velocityY=2
  edges= createEdgeSprites();
}
function draw(){
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY)
  
 portal1.bounceOff(bar9)
 portal1.bounceOff(edges)
 portal2.bounceOff(bar16)
 portal2.bounceOff(edges)
 portal3.bounceOff(bar7)
 portal3.bounceOff(bar2)
 portal3.bounceOff(edges)
 portal4.bounceOff(bar16)
 portal4.bounceOff(edges)
 
  drawSprites()
}