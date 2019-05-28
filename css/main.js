
function doShow(){
    document.getElementById( "myAnimation" ).style.display = "block" ;
    setTimeout( "doHide()", 10000 ) ;
}

function doHide(){
    document.getElementById( "myAnimation" ).style.display = "none" ;
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

function myMove() {
    var elem = document.getElementById("myAnimation");   
    var pos = -200;
    var id = setInterval(frame, 9);
    function frame() {
        if (pos == 700) {
        clearInterval(id);
        } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + pos + 'px'; 
        }
    }
}

document.getElementById("hiddenimage").style.transform = "rotate(32deg) scaleX(0.5) scaleY(0.5)";
