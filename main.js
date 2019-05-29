//  ===========================
//  BUTTON + MUSIC
//  ===========================

function doShow(){
    document.getElementById( "canvas" ).style.display = "block" ;
    document.getElementById( "center" ).style.display = "none" ;
    setTimeout( "doHide()", 9000 ) ;
}

function doHide(){
    document.getElementById( "canvas" ).style.display = "none" ;
    document.getElementById( "center" ).style.display = "block" ;
}

function playMusic(){
    var audio = new Audio('Assets/NyanCat.mp3');
    audio.play();
}

//  ===========================
//  RANDOM CATS
//  ===========================

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var img = new Image();
img.src = "Assets/images/Nyancat.png";

var noOCats = 20    
var cats = [];
for(var i=0; i<noOCats; i++){
    var x = Math.floor(Math.random()*canvas.width);
    var y = Math.floor(Math.random()*canvas.height);
    cats[i] = new Cat(x,y)
}

function Cat(x,y){
    this.x = x;
    this.y = y;

    this.fall = function(){
        this.x = this.x+ 4;
        this.y = this.y+ 2;
        if(this.y > canvas.height){
            this.y = -100;
        }
        if(this.x > canvas.width){
            this.x = -150;
        }
    }

    this.show = function(){
        context.drawImage(img, this.x-100, this.y-100, 300, 100)
    }
}

function draw(){    
    var background = new Image();
    background.src = "Assets/images/background.jpg";

    background.onload = function(){
        context.drawImage(background, 0, 0, canvas.width, canvas.height);
    }

    for(var i=0; i<noOCats;i++){
        cats[i].show();
        cats[i].fall();
    }
}

function update(){
    draw();
    window.requestAnimationFrame(update);
}
    
update();

