function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var boxes = document.getElementsByClassName("box");

function numberChange(){
    boxes[0].innerHTML = getRandom(2000,5000);
    boxes[1].innerHTML = getRandom(2000,5000);
    boxes[2].innerHTML = getRandom(2000,5000);
    boxes[3].innerHTML = getRandom(2000,5000);
    boxes[4].innerHTML = getRandom(2000,5000);
    boxes[5].innerHTML = getRandom(2000,5000);
    boxes[6].innerHTML = getRandom(2000,5000);
    boxes[7].innerHTML = getRandom(2000,5000);
    boxes[8].innerHTML = getRandom(2000,5000);
}

function numberChangeFix(){
    boxes[0].innerHTML = getRandom(2000,5000);
    boxes[1].innerHTML = getRandom(2000,5000);
    boxes[2].innerHTML = getRandom(2000,5000);
    boxes[3].innerHTML = getRandom(2000,5000);
    boxes[4].innerHTML = 2500;
    boxes[5].innerHTML = getRandom(2000,5000);
    boxes[6].innerHTML = getRandom(2000,5000);
    boxes[7].innerHTML = getRandom(2000,5000);
    boxes[8].innerHTML = getRandom(2000,5000);
}

function showPrize(){
    document.getElementById("empty1").style.display="block";
    document.getElementById("prize").style.display="block";
    document.getElementById("empty2").style.display="block";
}

function spin(){
    
    for (var i = 0; i < 70; i++) { 
        if(i<1){
            setTimeout(confetti, 3600);
            setTimeout(showPrize, 3600);
            setTimeout(numberChangeFix, (70-i)*50);
        }
        else{
            setTimeout(numberChange, (70-i)*50);
        }
    } 
}



  