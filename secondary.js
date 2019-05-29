var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var img = new Image();
img.src = "images/Nyancat.png";

var background = new Background();
background.src = "url('https://i.gifer.com/TPH.gif')";

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
        context.drawImage(img, this.x100, this.y-100, 300, 100)
    }
}

function draw(){    
    context.drawImage(background, this.x, this.y, canvas.width, canvas.height)  
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
