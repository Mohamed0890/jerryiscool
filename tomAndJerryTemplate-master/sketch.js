var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;
var bg;
function preload() {
    bg=loadImage("images/garden.png");
    tomImg1=loadAnimation("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadAnimation("images/cat4.png");
    jerryImg1=loadAnimation("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600);
    tom.addAnimation("tomrest",tomImg1);
    tom.scale=0.2;
    jerry=createSprite(130,600);
    jerry.addAnimation("jerrbeingcool",jerryImg1);
    jerry.scale=0.2;
}

function draw() {

    background(bg);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.x=300;
        tom.addAnimation("tomgetscaught",tomImg3);
        tom.changeAnimation("tomgetscaught");
        jerry.addAnimation("whodaresdisturbme",jerryImg3);
        jerry.changeAnimation("whodaresdisturbme")
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode===37){
        tom.velocityX=-5;
        tom.addAnimation("tomkillingjerrysvibe",tomImg2);
        tom.changeAnimation("tomkillingjerrysvibe");

        jerry.addAnimation("youcantcatchmeloser",jerryImg2);
        jerry.changeAnimation("youcantcatchmeloser");
    }


}
