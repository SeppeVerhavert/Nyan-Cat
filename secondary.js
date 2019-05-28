var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
context.rotate(20 * Math.PI / 180);

var img = new Image();
img.src = "images/Nyancat.png";

var noOHeatrts = 14
var hearts = [];
for(var i=0; i<noOHeatrts; i++){
    var x = Math.floor(Math.random()*canvas.width);
    var y = Math.floor(Math.random()*canvas.height);
    hearts[i] = new Hearth(x,y)
}

var speed = Math.floor(Math.random());

function Hearth(x,y){
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
    context.drawImage(img, this.x, this.y, 300, 100)
    }
}

function draw(){
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for(var i=0; i<noOHeatrts;i++){
        hearts[i].show();
        hearts[i].fall();
    }
}

function update(){
    draw();
    window.requestAnimationFrame(update);
}

update();
