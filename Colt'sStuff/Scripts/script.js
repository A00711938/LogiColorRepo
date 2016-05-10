var color = ["green", "red", "yellow", "blue", "white", "grey", "purple", "orange", "black"];
var c1 = Math.floor(Math.random() * 9);
var c2 = Math.floor(Math.random() * 9);
var c3 = Math.floor(Math.random() * 9);


var a = Math.floor(Math.random() * 10 + 1);
var b = Math.floor(Math.random() * 10 + 1);
var score = 0;


function colorComb( color1, color2, color3) {
    if (color1 == color[1] && color2 == color[3] || color1 == color[3] && color2 == color[1]) { // red + blue = purple
        if (color3 == color[6]) {
            return true;
        } else{
            return false;
        }
    } else if (color1 == color[8] && color2 == color[4] || color1 == color[4] && color2 == color[8]) { // black + white = grey
        if (color3 == color[5]) {
            return true;
        } else{
            return false;
        }
    } else if (color1 == color[2] && color2 == color[1] || color1 == color[1] && color2 == color[2]) { // yellow + red = orange
        if (color3 == color[7]) {
            return true;
        } else{
            return false;
        }
    } else if (color1 == color[2] && color2 == color[3] || color1 == color[3] && color2 == color[2]) { // yellow + blue = green
        if (color3 == color[0]) {
            return true;
        } else{
            return false;
        }
    } else if (color1 === color2 && color2 === color3) { // all equal
            return true;
    }
    return false;
}
    
window.addEventListener("load", displayMessage, false);

function displayMessage() {
    var c1 = Math.floor(Math.random() * 9);
    var c2 = Math.floor(Math.random() * 9);
    var c3 = Math.floor(Math.random() * 9);
    
    var a = Math.floor(Math.random() * 10 + 1);
    var b = Math.floor(Math.random() * 10 + 1);
    
    document.getElementById('num1').style.color = color[c1];
    document.getElementById('num2').style.color = color[c1];
    document.getElementById('sum').style.color = color[c3];
    document.getElementById('num1').innerHTML = a;
    document.getElementById('num2').innerHTML = b;
    document.getElementById('sum').innerHTML = (a + b);
    document.getElementById('score').innerHTML = "Score: " + score;
}

docuent.getElementById('tr').addEventListener("click", trueFun);
document.getElementById('fal').addEventListener("click", falseFun);

function trueFun() {
    if (colorComb(color[c1], color[c2], color[c3])) {
        score++;
        document.getElementById('score').innerHTML = "Score" + score;
        document.getElementById('message').style.color = "green";
        document.getElementById('message').innerHTML = "Correct!";
        displayMessage();
    } else{
        document.getElementById('message').style.color = "red";
        document.getElementById('message').innerHTML = "Wrong!";
        displayMessage();
    }
}

function falseFun() {
    if (!colorComb(color[c1], color[c2], color[c3])) {
        score++;
        document.getElementById('score').innerHTML = "Score: " + score;
        document.getElementById('message').style.color = "green";
        document.getElementById('message').innerHTML = "Correct!";
        displayMessage();
    } else{
        document.getElementById('message').style.color = "red";
        document.getElementById('message').innerHTML = "Wrong!";
        displayMessage();
    }
}