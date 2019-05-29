 
function doShow(){
    document.getElementById( "canvas" ).style.display = "block" ;
    setTimeout( "doHide()", 10000 ) ;
}

function doHide(){
    document.getElementById( "canvas" ).style.display = "none" ;
}

function playMusic(){
    var audio = new Audio('NyanCat.mp3');
    audio.play();
}

function changeBackground(){
    document.body.style.background = "url('https://i.gifer.com/TPH.gif') repeat left top";
    setTimeout( "whiteBackground()", 10000 ) ;
}

function whiteBackground(){
    document.body.style.background = "#f3f3f3";
}

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var img = new Image();
img.src = "images/Nyancat.png";

var background = new Background();
background.src = "images/background.gif";

var noOCats = 14
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
        this.x = this.x+ 1;
        this.y = this.y+ 1;
        if(this.y > canvas.height){
            this.y = 0;
        }
        if(this.x > canvas.width){
            this.x = 0;
        }
    }

    this.show = function(){
        
        context.drawImage(img, this.x-100, this.y-100, 300, 100)
    }
}

function draw(){    
    context.drawImage(background)

    for(var i=0; i<noOCats;i++){
        cats[i].show();
        cats[i].fall();
    }
}

function update(){
    draw();
    window.requestAnimationFrame(update);
}

function changeBackground(){
    document.body.style.background = "url(images/backrgound.gif) repeat left top";
    setTimeout( "whiteBackground()", 10000 ) ;
}

function whiteBackground(){
    document.body.style.background = "#f3f3f3";
}

update();

